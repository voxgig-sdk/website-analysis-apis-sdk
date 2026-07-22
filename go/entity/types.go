// Typed models for the WebsiteAnalysisApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Performance is the typed data model for the performance entity.
type Performance struct {
	LoadTime *float64 `json:"load_time,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Request *int `json:"request,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Url *string `json:"url,omitempty"`
}

// PerformanceLoadMatch is the typed request payload for Performance.LoadTyped.
type PerformanceLoadMatch struct {
	LoadTime *float64 `json:"load_time,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Request *int `json:"request,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Screenshot is the typed data model for the screenshot entity.
type Screenshot struct {
	ScreenshotUrl *string `json:"screenshot_url,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Url *string `json:"url,omitempty"`
}

// ScreenshotLoadMatch is the typed request payload for Screenshot.LoadTyped.
type ScreenshotLoadMatch struct {
	ScreenshotUrl *string `json:"screenshot_url,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Seo is the typed data model for the seo entity.
type Seo struct {
	FoundOn *string `json:"found_on,omitempty"`
	Link *string `json:"link,omitempty"`
	StatusCode *int `json:"status_code,omitempty"`
}

// SeoListMatch is the typed request payload for Seo.ListTyped.
type SeoListMatch struct {
	FoundOn *string `json:"found_on,omitempty"`
	Link *string `json:"link,omitempty"`
	StatusCode *int `json:"status_code,omitempty"`
}

// SeoAnalysi is the typed data model for the seo_analysi entity.
type SeoAnalysi struct {
	Heading *map[string]any `json:"heading,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Score *float64 `json:"score,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// SeoAnalysiLoadMatch is the typed request payload for SeoAnalysi.LoadTyped.
type SeoAnalysiLoadMatch struct {
	Heading *map[string]any `json:"heading,omitempty"`
	Image *map[string]any `json:"image,omitempty"`
	MetaDescription *string `json:"meta_description,omitempty"`
	Score *float64 `json:"score,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Title *string `json:"title,omitempty"`
	Url *string `json:"url,omitempty"`
}

// Ssl is the typed data model for the ssl entity.
type Ssl struct {
	DaysRemaining *int `json:"days_remaining,omitempty"`
	Issuer *string `json:"issuer,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Url *string `json:"url,omitempty"`
	Valid *bool `json:"valid,omitempty"`
	ValidFrom *string `json:"valid_from,omitempty"`
	ValidTo *string `json:"valid_to,omitempty"`
}

// SslLoadMatch is the typed request payload for Ssl.LoadTyped.
type SslLoadMatch struct {
	DaysRemaining *int `json:"days_remaining,omitempty"`
	Issuer *string `json:"issuer,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Url *string `json:"url,omitempty"`
	Valid *bool `json:"valid,omitempty"`
	ValidFrom *string `json:"valid_from,omitempty"`
	ValidTo *string `json:"valid_to,omitempty"`
}

// TechStack is the typed data model for the tech_stack entity.
type TechStack struct {
	Category *string `json:"category,omitempty"`
	Name *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

// TechStackListMatch is the typed request payload for TechStack.ListTyped.
type TechStackListMatch struct {
	Category *string `json:"category,omitempty"`
	Name *string `json:"name,omitempty"`
	Version *string `json:"version,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
