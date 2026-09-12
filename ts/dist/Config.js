"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'WebsiteAnalysisApis',
        slug: "website-analysis-apis",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://51-68-119-197.sslip.io",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            performance: {},
            screenshot: {},
            seo: {},
            seo_analysi: {},
            ssl: {},
            tech_stack: {},
        }
    };
    entity = {
        "performance": {
            "fields": [
                {
                    "name": "loadTime",
                    "short": "Page load time in milliseconds",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "pageSize",
                    "short": "Total page size in bytes",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "requests",
                    "short": "Number of HTTP requests",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "date-time",
                    "name": "timestamp",
                    "short": "Timestamp of the analysis",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The analyzed URL",
                    "type": "`$STRING`"
                }
            ],
            "name": "performance",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/performance",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "performance"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "performance"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "screenshot": {
            "fields": [
                {
                    "name": "screenshotUrl",
                    "short": "URL to the captured screenshot",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "timestamp",
                    "short": "Timestamp of the capture",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The captured URL",
                    "type": "`$STRING`"
                }
            ],
            "name": "screenshot",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/screenshot",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "screenshot"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "screenshot"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "seo": {
            "fields": [
                {
                    "name": "foundOn",
                    "short": "Page where the broken link was found",
                    "type": "`$STRING`"
                },
                {
                    "name": "link",
                    "short": "The broken link URL",
                    "type": "`$STRING`"
                },
                {
                    "name": "statusCode",
                    "short": "HTTP status code returned",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "seo",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/seo",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "seo"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.brokenLinks`"
                            },
                            "parts": [
                                "api",
                                "seo"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "seo_analysi": {
            "fields": [
                {
                    "name": "headings",
                    "short": "Heading tags analysis",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "images",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "metaDescription",
                    "short": "Meta description",
                    "type": "`$STRING`"
                },
                {
                    "name": "score",
                    "short": "Overall SEO score",
                    "type": "`$NUMBER`"
                },
                {
                    "format": "date-time",
                    "name": "timestamp",
                    "short": "Timestamp of the audit",
                    "type": "`$STRING`"
                },
                {
                    "name": "title",
                    "short": "Page title",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The audited URL",
                    "type": "`$STRING`"
                }
            ],
            "name": "seo_analysi",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/seo-audit",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "seo-audit"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "seo-audit"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "ssl": {
            "fields": [
                {
                    "name": "daysRemaining",
                    "short": "Days remaining until expiry",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "issuer",
                    "short": "Certificate issuer",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "timestamp",
                    "short": "Timestamp of the check",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "short": "The analyzed URL",
                    "type": "`$STRING`"
                },
                {
                    "name": "valid",
                    "short": "Whether the SSL certificate is valid",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "validFrom",
                    "short": "Certificate valid from date",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "validTo",
                    "short": "Certificate expiry date",
                    "type": "`$STRING`"
                }
            ],
            "name": "ssl",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/ssl",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "ssl"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "api",
                                "ssl"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "tech_stack": {
            "fields": [
                {
                    "name": "category",
                    "short": "Technology category",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Technology name",
                    "type": "`$STRING`"
                },
                {
                    "name": "version",
                    "short": "Detected version",
                    "type": "`$STRING`"
                }
            ],
            "name": "tech_stack",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/api/techstack",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "techstack"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.technologies`"
                            },
                            "parts": [
                                "api",
                                "techstack"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map