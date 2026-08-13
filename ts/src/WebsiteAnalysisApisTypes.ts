// Typed models for the WebsiteAnalysisApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Performance {
  loadTime?: number
  pageSize?: number
  requests?: number
  timestamp?: string
  url?: string
}

export interface PerformanceLoadMatch {
  loadTime?: number
  pageSize?: number
  requests?: number
  timestamp?: string
  url?: string
}

export interface Screenshot {
  screenshotUrl?: string
  timestamp?: string
  url?: string
}

export interface ScreenshotLoadMatch {
  screenshotUrl?: string
  timestamp?: string
  url?: string
}

export interface Seo {
  foundOn?: string
  link?: string
  statusCode?: number
}

export interface SeoListMatch {
  foundOn?: string
  link?: string
  statusCode?: number
}

export interface SeoAnalysi {
  headings?: Record<string, any>
  images?: Record<string, any>
  metaDescription?: string
  score?: number
  timestamp?: string
  title?: string
  url?: string
}

export interface SeoAnalysiLoadMatch {
  headings?: Record<string, any>
  images?: Record<string, any>
  metaDescription?: string
  score?: number
  timestamp?: string
  title?: string
  url?: string
}

export interface Ssl {
  daysRemaining?: number
  issuer?: string
  timestamp?: string
  url?: string
  valid?: boolean
  validFrom?: string
  validTo?: string
}

export interface SslLoadMatch {
  daysRemaining?: number
  issuer?: string
  timestamp?: string
  url?: string
  valid?: boolean
  validFrom?: string
  validTo?: string
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

