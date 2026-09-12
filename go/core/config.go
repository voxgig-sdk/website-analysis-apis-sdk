package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "WebsiteAnalysisApis",
			"slug": "website-analysis-apis",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://51-68-119-197.sslip.io",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"performance": map[string]any{},
				"screenshot": map[string]any{},
				"seo": map[string]any{},
				"seo_analysi": map[string]any{},
				"ssl": map[string]any{},
				"tech_stack": map[string]any{},
			},
		},
		"entity": map[string]any{
			"performance": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "loadTime",
						"short": "Page load time in milliseconds",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "pageSize",
						"short": "Total page size in bytes",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "requests",
						"short": "Number of HTTP requests",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the analysis",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The analyzed URL",
						"type": "`$STRING`",
					},
				},
				"name": "performance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/performance",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "performance",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"performance",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"screenshot": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "screenshotUrl",
						"short": "URL to the captured screenshot",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the capture",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The captured URL",
						"type": "`$STRING`",
					},
				},
				"name": "screenshot",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/screenshot",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "screenshot",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"screenshot",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"seo": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "foundOn",
						"short": "Page where the broken link was found",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "link",
						"short": "The broken link URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "statusCode",
						"short": "HTTP status code returned",
						"type": "`$INTEGER`",
					},
				},
				"name": "seo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/seo",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "seo",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brokenLinks`",
								},
								"parts": []any{
									"api",
									"seo",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"seo_analysi": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "headings",
						"short": "Heading tags analysis",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metaDescription",
						"short": "Meta description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "score",
						"short": "Overall SEO score",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the audit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"short": "Page title",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The audited URL",
						"type": "`$STRING`",
					},
				},
				"name": "seo_analysi",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/seo-audit",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "seo-audit",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"seo-audit",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"ssl": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "daysRemaining",
						"short": "Days remaining until expiry",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "issuer",
						"short": "Certificate issuer",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the check",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "The analyzed URL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "valid",
						"short": "Whether the SSL certificate is valid",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "validFrom",
						"short": "Certificate valid from date",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "validTo",
						"short": "Certificate expiry date",
						"type": "`$STRING`",
					},
				},
				"name": "ssl",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/ssl",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "ssl",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"api",
									"ssl",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"tech_stack": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"short": "Technology category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Technology name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "version",
						"short": "Detected version",
						"type": "`$STRING`",
					},
				},
				"name": "tech_stack",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/api/techstack",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "techstack",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.technologies`",
								},
								"parts": []any{
									"api",
									"techstack",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
