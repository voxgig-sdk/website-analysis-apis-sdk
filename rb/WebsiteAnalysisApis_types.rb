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
# @!attribute [rw] load_time
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] request
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Performance = Struct.new(
  :load_time,
  :page_size,
  :request,
  :timestamp,
  :url,
  keyword_init: true
)

# Request payload for Performance#load.
#
# @!attribute [rw] load_time
#   @return [Float, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] request
#   @return [Integer, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
PerformanceLoadMatch = Struct.new(
  :load_time,
  :page_size,
  :request,
  :timestamp,
  :url,
  keyword_init: true
)

# Screenshot entity data model.
#
# @!attribute [rw] screenshot_url
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Screenshot = Struct.new(
  :screenshot_url,
  :timestamp,
  :url,
  keyword_init: true
)

# Request payload for Screenshot#load.
#
# @!attribute [rw] screenshot_url
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
ScreenshotLoadMatch = Struct.new(
  :screenshot_url,
  :timestamp,
  :url,
  keyword_init: true
)

# Seo entity data model.
#
# @!attribute [rw] found_on
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
Seo = Struct.new(
  :found_on,
  :link,
  :status_code,
  keyword_init: true
)

# Request payload for Seo#list.
#
# @!attribute [rw] found_on
#   @return [String, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] status_code
#   @return [Integer, nil]
SeoListMatch = Struct.new(
  :found_on,
  :link,
  :status_code,
  keyword_init: true
)

# SeoAnalysi entity data model.
#
# @!attribute [rw] heading
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] meta_description
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
  :heading,
  :image,
  :meta_description,
  :score,
  :timestamp,
  :title,
  :url,
  keyword_init: true
)

# Request payload for SeoAnalysi#load.
#
# @!attribute [rw] heading
#   @return [Hash, nil]
#
# @!attribute [rw] image
#   @return [Hash, nil]
#
# @!attribute [rw] meta_description
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
  :heading,
  :image,
  :meta_description,
  :score,
  :timestamp,
  :title,
  :url,
  keyword_init: true
)

# Ssl entity data model.
#
# @!attribute [rw] days_remaining
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
# @!attribute [rw] valid_from
#   @return [String, nil]
#
# @!attribute [rw] valid_to
#   @return [String, nil]
Ssl = Struct.new(
  :days_remaining,
  :issuer,
  :timestamp,
  :url,
  :valid,
  :valid_from,
  :valid_to,
  keyword_init: true
)

# Request payload for Ssl#load.
#
# @!attribute [rw] days_remaining
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
# @!attribute [rw] valid_from
#   @return [String, nil]
#
# @!attribute [rw] valid_to
#   @return [String, nil]
SslLoadMatch = Struct.new(
  :days_remaining,
  :issuer,
  :timestamp,
  :url,
  :valid,
  :valid_from,
  :valid_to,
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

