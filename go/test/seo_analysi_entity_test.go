package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/website-analysis-apis-sdk/go"
	"github.com/voxgig-sdk/website-analysis-apis-sdk/go/core"

	vs "github.com/voxgig-sdk/website-analysis-apis-sdk/go/utility/struct"
)

func TestSeoAnalysiEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SeoAnalysi(nil)
		if ent == nil {
			t.Fatal("expected non-nil SeoAnalysiEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := seo_analysiBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "seo_analysi." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		seoAnalysiRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.seo_analysi", setup.data)))
		var seoAnalysiRef01Data map[string]any
		if len(seoAnalysiRef01DataRaw) > 0 {
			seoAnalysiRef01Data = core.ToMapAny(seoAnalysiRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = seoAnalysiRef01Data

		// LOAD
		seoAnalysiRef01Ent := client.SeoAnalysi(nil)
		seoAnalysiRef01MatchDt0 := map[string]any{}
		seoAnalysiRef01DataDt0Loaded, err := seoAnalysiRef01Ent.Load(seoAnalysiRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if seoAnalysiRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func seo_analysiBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "seo_analysi", "SeoAnalysiTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read seo_analysi test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse seo_analysi test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"seo_analysi01", "seo_analysi02", "seo_analysi03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID": idmap,
		"WEBSITE_ANALYSIS_APIS_TEST_LIVE":      "FALSE",
		"WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["WEBSITE_ANALYSIS_APIS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewWebsiteAnalysisApisSDK(core.ToMapAny(mergedOpts))
	}

	live := env["WEBSITE_ANALYSIS_APIS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
