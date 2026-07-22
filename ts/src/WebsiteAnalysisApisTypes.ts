// Typed models for the WebsiteAnalysisApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Performance {
  load_time?: number
  page_size?: number
  request?: number
  timestamp?: string
  url?: string
}

export interface PerformanceLoadMatch {
  load_time?: number
  page_size?: number
  request?: number
  timestamp?: string
  url?: string
}

export interface Screenshot {
  screenshot_url?: string
  timestamp?: string
  url?: string
}

export interface ScreenshotLoadMatch {
  screenshot_url?: string
  timestamp?: string
  url?: string
}

export interface Seo {
  found_on?: string
  link?: string
  status_code?: number
}

export interface SeoListMatch {
  found_on?: string
  link?: string
  status_code?: number
}

export interface SeoAnalysi {
  heading?: Record<string, any>
  image?: Record<string, any>
  meta_description?: string
  score?: number
  timestamp?: string
  title?: string
  url?: string
}

export interface SeoAnalysiLoadMatch {
  heading?: Record<string, any>
  image?: Record<string, any>
  meta_description?: string
  score?: number
  timestamp?: string
  title?: string
  url?: string
}

export interface Ssl {
  days_remaining?: number
  issuer?: string
  timestamp?: string
  url?: string
  valid?: boolean
  valid_from?: string
  valid_to?: string
}

export interface SslLoadMatch {
  days_remaining?: number
  issuer?: string
  timestamp?: string
  url?: string
  valid?: boolean
  valid_from?: string
  valid_to?: string
}

export interface TechStack {
  category?: string
  name?: string
  version?: string
}

export interface TechStackListMatch {
  category?: string
  name?: string
  version?: string
}

