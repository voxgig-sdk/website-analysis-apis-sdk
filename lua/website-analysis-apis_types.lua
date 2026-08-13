-- Typed models for the WebsiteAnalysisApis SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Performance
---@field loadTime? number
---@field pageSize? number
---@field requests? number
---@field timestamp? string
---@field url? string

---@class PerformanceLoadMatch
---@field loadTime? number
---@field pageSize? number
---@field requests? number
---@field timestamp? string
---@field url? string

---@class Screenshot
---@field screenshotUrl? string
---@field timestamp? string
---@field url? string

---@class ScreenshotLoadMatch
---@field screenshotUrl? string
---@field timestamp? string
---@field url? string

---@class Seo
---@field foundOn? string
---@field link? string
---@field statusCode? number

---@class SeoListMatch
---@field foundOn? string
---@field link? string
---@field statusCode? number

---@class SeoAnalysi
---@field headings? table
---@field images? table
---@field metaDescription? string
---@field score? number
---@field timestamp? string
---@field title? string
---@field url? string

---@class SeoAnalysiLoadMatch
---@field headings? table
---@field images? table
---@field metaDescription? string
---@field score? number
---@field timestamp? string
---@field title? string
---@field url? string

---@class Ssl
---@field daysRemaining? number
---@field issuer? string
---@field timestamp? string
---@field url? string
---@field valid? boolean
---@field validFrom? string
---@field validTo? string

---@class SslLoadMatch
---@field daysRemaining? number
---@field issuer? string
---@field timestamp? string
---@field url? string
---@field valid? boolean
---@field validFrom? string
---@field validTo? string

---@class TechStack
---@field category? string
---@field name? string
---@field version? string

---@class TechStackListMatch
---@field category? string
---@field name? string
---@field version? string

local M = {}

return M
