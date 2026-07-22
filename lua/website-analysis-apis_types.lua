-- Typed models for the WebsiteAnalysisApis SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Performance
---@field load_time? number
---@field page_size? number
---@field request? number
---@field timestamp? string
---@field url? string

---@class PerformanceLoadMatch
---@field load_time? number
---@field page_size? number
---@field request? number
---@field timestamp? string
---@field url? string

---@class Screenshot
---@field screenshot_url? string
---@field timestamp? string
---@field url? string

---@class ScreenshotLoadMatch
---@field screenshot_url? string
---@field timestamp? string
---@field url? string

---@class Seo
---@field found_on? string
---@field link? string
---@field status_code? number

---@class SeoListMatch
---@field found_on? string
---@field link? string
---@field status_code? number

---@class SeoAnalysi
---@field heading? table
---@field image? table
---@field meta_description? string
---@field score? number
---@field timestamp? string
---@field title? string
---@field url? string

---@class SeoAnalysiLoadMatch
---@field heading? table
---@field image? table
---@field meta_description? string
---@field score? number
---@field timestamp? string
---@field title? string
---@field url? string

---@class Ssl
---@field days_remaining? number
---@field issuer? string
---@field timestamp? string
---@field url? string
---@field valid? boolean
---@field valid_from? string
---@field valid_to? string

---@class SslLoadMatch
---@field days_remaining? number
---@field issuer? string
---@field timestamp? string
---@field url? string
---@field valid? boolean
---@field valid_from? string
---@field valid_to? string

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
