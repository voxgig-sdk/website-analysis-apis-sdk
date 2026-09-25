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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Load Time",
						"type": "`$NUMBER`",
						"short": "Page load time in milliseconds",
					},
					map[string]any{
						"name": "pageSize",
						"title": "Page Size",
						"type": "`$INTEGER`",
						"short": "Total page size in bytes",
					},
					map[string]any{
						"name": "requests",
						"title": "Requests",
						"type": "`$INTEGER`",
						"short": "Number of HTTP requests",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"short": "Timestamp of the analysis",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The analyzed URL",
					},
				},
				"name": "performance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"performance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
						"title": "Screenshot Url",
						"type": "`$STRING`",
						"short": "URL to the captured screenshot",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"short": "Timestamp of the capture",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The captured URL",
					},
				},
				"name": "screenshot",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"screenshot",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
						"title": "Found On",
						"type": "`$STRING`",
						"short": "Page where the broken link was found",
					},
					map[string]any{
						"name": "link",
						"title": "Link",
						"type": "`$STRING`",
						"short": "The broken link URL",
					},
					map[string]any{
						"name": "statusCode",
						"title": "Status Code",
						"type": "`$INTEGER`",
						"short": "HTTP status code returned",
					},
				},
				"name": "seo",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"seo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.brokenLinks`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
						"title": "Headings",
						"type": "`$OBJECT`",
						"short": "Heading tags analysis",
					},
					map[string]any{
						"name": "images",
						"title": "Images",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "metaDescription",
						"title": "Meta Description",
						"type": "`$STRING`",
						"short": "Meta description",
					},
					map[string]any{
						"name": "score",
						"title": "Score",
						"type": "`$NUMBER`",
						"short": "Overall SEO score",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"short": "Timestamp of the audit",
						"format": "date-time",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"short": "Page title",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The audited URL",
					},
				},
				"name": "seo_analysi",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"seo-audit",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
						"title": "Days Remaining",
						"type": "`$INTEGER`",
						"short": "Days remaining until expiry",
					},
					map[string]any{
						"name": "issuer",
						"title": "Issuer",
						"type": "`$STRING`",
						"short": "Certificate issuer",
					},
					map[string]any{
						"name": "timestamp",
						"title": "Timestamp",
						"type": "`$STRING`",
						"short": "Timestamp of the check",
						"format": "date-time",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"short": "The analyzed URL",
					},
					map[string]any{
						"name": "valid",
						"title": "Valid",
						"type": "`$BOOLEAN`",
						"short": "Whether the SSL certificate is valid",
					},
					map[string]any{
						"name": "validFrom",
						"title": "Valid From",
						"type": "`$STRING`",
						"short": "Certificate valid from date",
						"format": "date-time",
					},
					map[string]any{
						"name": "validTo",
						"title": "Valid To",
						"type": "`$STRING`",
						"short": "Certificate expiry date",
						"format": "date-time",
					},
				},
				"name": "ssl",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"ssl",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
						"title": "Category",
						"type": "`$STRING`",
						"short": "Technology category",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Technology name",
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$STRING`",
						"short": "Detected version",
					},
				},
				"name": "tech_stack",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"api",
									"techstack",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.technologies`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
