-- WebsiteAnalysisApis SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "WebsiteAnalysisApis",
      slug = "website-analysis-apis",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://51-68-119-197.sslip.io",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["performance"] = {},
        ["screenshot"] = {},
        ["seo"] = {},
        ["seo_analysi"] = {},
        ["ssl"] = {},
        ["tech_stack"] = {},
      },
    },
    entity = {
      ["performance"] = {
        ["fields"] = {
          {
            ["name"] = "loadTime",
            ["short"] = "Page load time in milliseconds",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "pageSize",
            ["short"] = "Total page size in bytes",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "requests",
            ["short"] = "Number of HTTP requests",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "timestamp",
            ["short"] = "Timestamp of the analysis",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "The analyzed URL",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "performance",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/performance",
                ["parts"] = {
                  "api",
                  "performance",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["screenshot"] = {
        ["fields"] = {
          {
            ["name"] = "screenshotUrl",
            ["short"] = "URL to the captured screenshot",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timestamp",
            ["short"] = "Timestamp of the capture",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "The captured URL",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "screenshot",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/screenshot",
                ["parts"] = {
                  "api",
                  "screenshot",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["seo"] = {
        ["fields"] = {
          {
            ["name"] = "foundOn",
            ["short"] = "Page where the broken link was found",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "link",
            ["short"] = "The broken link URL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "statusCode",
            ["short"] = "HTTP status code returned",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "seo",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/seo",
                ["parts"] = {
                  "api",
                  "seo",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.brokenLinks`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["seo_analysi"] = {
        ["fields"] = {
          {
            ["name"] = "headings",
            ["short"] = "Heading tags analysis",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "images",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "metaDescription",
            ["short"] = "Meta description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "score",
            ["short"] = "Overall SEO score",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "timestamp",
            ["short"] = "Timestamp of the audit",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["short"] = "Page title",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "The audited URL",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "seo_analysi",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/seo-audit",
                ["parts"] = {
                  "api",
                  "seo-audit",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["ssl"] = {
        ["fields"] = {
          {
            ["name"] = "daysRemaining",
            ["short"] = "Days remaining until expiry",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "issuer",
            ["short"] = "Certificate issuer",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "timestamp",
            ["short"] = "Timestamp of the check",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "The analyzed URL",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "valid",
            ["short"] = "Whether the SSL certificate is valid",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "validFrom",
            ["short"] = "Certificate valid from date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "validTo",
            ["short"] = "Certificate expiry date",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "ssl",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/ssl",
                ["parts"] = {
                  "api",
                  "ssl",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["tech_stack"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["short"] = "Technology category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Technology name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "version",
            ["short"] = "Detected version",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "tech_stack",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/techstack",
                ["parts"] = {
                  "api",
                  "techstack",
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.technologies`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
