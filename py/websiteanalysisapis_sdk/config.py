# WebsiteAnalysisApis SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "WebsiteAnalysisApis",
            "slug": "website-analysis-apis",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://51-68-119-197.sslip.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "performance": {},
                "screenshot": {},
                "seo": {},
                "seo_analysi": {},
                "ssl": {},
                "tech_stack": {},
            },
        },
        "entity": {
      "performance": {
        "fields": [
          {
            "name": "loadTime",
            "short": "Page load time in milliseconds",
            "type": "`$NUMBER`",
          },
          {
            "name": "pageSize",
            "short": "Total page size in bytes",
            "type": "`$INTEGER`",
          },
          {
            "name": "requests",
            "short": "Number of HTTP requests",
            "type": "`$INTEGER`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the analysis",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "The analyzed URL",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/performance",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "performance",
                  },
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "performance",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "screenshot": {
        "fields": [
          {
            "name": "screenshotUrl",
            "short": "URL to the captured screenshot",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the capture",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "The captured URL",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/screenshot",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "screenshot",
                  },
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "screenshot",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "seo": {
        "fields": [
          {
            "name": "foundOn",
            "short": "Page where the broken link was found",
            "type": "`$STRING`",
          },
          {
            "name": "link",
            "short": "The broken link URL",
            "type": "`$STRING`",
          },
          {
            "name": "statusCode",
            "short": "HTTP status code returned",
            "type": "`$INTEGER`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/seo",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "seo",
                  },
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.brokenLinks`",
                },
                "parts": [
                  "api",
                  "seo",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "seo_analysi": {
        "fields": [
          {
            "name": "headings",
            "short": "Heading tags analysis",
            "type": "`$OBJECT`",
          },
          {
            "name": "images",
            "type": "`$OBJECT`",
          },
          {
            "name": "metaDescription",
            "short": "Meta description",
            "type": "`$STRING`",
          },
          {
            "name": "score",
            "short": "Overall SEO score",
            "type": "`$NUMBER`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the audit",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Page title",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "The audited URL",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/seo-audit",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "seo-audit",
                  },
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "seo-audit",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ssl": {
        "fields": [
          {
            "name": "daysRemaining",
            "short": "Days remaining until expiry",
            "type": "`$INTEGER`",
          },
          {
            "name": "issuer",
            "short": "Certificate issuer",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "timestamp",
            "short": "Timestamp of the check",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "The analyzed URL",
            "type": "`$STRING`",
          },
          {
            "name": "valid",
            "short": "Whether the SSL certificate is valid",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "validFrom",
            "short": "Certificate valid from date",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "validTo",
            "short": "Certificate expiry date",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/ssl",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "ssl",
                  },
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "api",
                  "ssl",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "tech_stack": {
        "fields": [
          {
            "name": "category",
            "short": "Technology category",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Technology name",
            "type": "`$STRING`",
          },
          {
            "name": "version",
            "short": "Detected version",
            "type": "`$STRING`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/api/techstack",
                "segments": [
                  {
                    "lit": "api",
                  },
                  {
                    "lit": "techstack",
                  },
                ],
                "select": {
                  "exist": [
                    "url",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.technologies`",
                },
                "parts": [
                  "api",
                  "techstack",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
