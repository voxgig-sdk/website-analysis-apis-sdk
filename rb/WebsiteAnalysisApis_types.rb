# frozen_string_literal: true

# Typed models for the WebsiteAnalysisApis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Performance entity data model.
#
# @!attribute [rw] loadTime
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] requests
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Performance = Struct.new(
  :loadTime,
  :pageSize,
  :requests,
  :timestamp,
  :url,
  keyword_init: true
)

# Request payload for Performance#load.
#
# @!attribute [rw] loadTime
#   @return [Float, nil]
#
# @!attribute [rw] pageSize
#   @return [Integer, nil]
#
# @!attribute [rw] requests
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
PerformanceLoadMatch = Struct.new(
  :loadTime,
  :pageSize,
  :requests,
  :timestamp,
  :url,
  keyword_init: true
)

# Screenshot entity data model.
#
# @!attribute [rw] screenshotUrl
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Screenshot = Struct.new(
  :screenshotUrl,
  :timestamp,
  :url,
  keyword_init: true
)

# Request payload for Screenshot#load.
#
# @!attribute [rw] screenshotUrl
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ScreenshotLoadMatch = Struct.new(
  :screenshotUrl,
  :timestamp,
  :url,
  keyword_init: true
)

# Seo entity data model.
#
# @!attribute [rw] foundOn
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] statusCode
#   @return [Integer, nil]
Seo = Struct.new(
  :foundOn,
  :link,
  :statusCode,
  keyword_init: true
)

# Request payload for Seo#list.
#
# @!attribute [rw] foundOn
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] statusCode
#   @return [Integer, nil]
SeoListMatch = Struct.new(
  :foundOn,
  :link,
  :statusCode,
  keyword_init: true
)

# SeoAnalysi entity data model.
#
# @!attribute [rw] headings
#   @return [Hash, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] metaDescription
#   @return [String, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SeoAnalysi = Struct.new(
  :headings,
  :images,
  :metaDescription,
  :score,
  :timestamp,
  :title,
  :url,
  keyword_init: true
)

# Request payload for SeoAnalysi#load.
#
# @!attribute [rw] headings
#   @return [Hash, nil]
#
# @!attribute [rw] images
#   @return [Hash, nil]
#
# @!attribute [rw] metaDescription
#   @return [String, nil]
#
# @!attribute [rw] score
#   @return [Float, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
SeoAnalysiLoadMatch = Struct.new(
  :headings,
  :images,
  :metaDescription,
  :score,
  :timestamp,
  :title,
  :url,
  keyword_init: true
)

# Ssl entity data model.
#
# @!attribute [rw] daysRemaining
#   @return [Integer, nil]
#
# @!attribute [rw] issuer
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
#
# @!attribute [rw] validFrom
#   @return [String, nil]
#
# @!attribute [rw] validTo
#   @return [String, nil]
Ssl = Struct.new(
  :daysRemaining,
  :issuer,
  :timestamp,
  :url,
  :valid,
  :validFrom,
  :validTo,
  keyword_init: true
)

# Request payload for Ssl#load.
#
# @!attribute [rw] daysRemaining
#   @return [Integer, nil]
#
# @!attribute [rw] issuer
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] valid
#   @return [Boolean, nil]
#
# @!attribute [rw] validFrom
#   @return [String, nil]
#
# @!attribute [rw] validTo
#   @return [String, nil]
SslLoadMatch = Struct.new(
  :daysRemaining,
  :issuer,
  :timestamp,
  :url,
  :valid,
  :validFrom,
  :validTo,
  keyword_init: true
)

# TechStack entity data model.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
TechStack = Struct.new(
  :category,
  :name,
  :version,
  keyword_init: true
)

# Request payload for TechStack#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
TechStackListMatch = Struct.new(
  :category,
  :name,
  :version,
  keyword_init: true
)

