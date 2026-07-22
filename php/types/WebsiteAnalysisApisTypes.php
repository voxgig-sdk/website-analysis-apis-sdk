<?php
declare(strict_types=1);

// Typed models for the WebsiteAnalysisApis SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Performance entity data model. */
class Performance
{
    public ?float $load_time = null;
    public ?int $page_size = null;
    public ?int $request = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Request payload for Performance#load. */
class PerformanceLoadMatch
{
    public ?float $load_time = null;
    public ?int $page_size = null;
    public ?int $request = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Screenshot entity data model. */
class Screenshot
{
    public ?string $screenshot_url = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Request payload for Screenshot#load. */
class ScreenshotLoadMatch
{
    public ?string $screenshot_url = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Seo entity data model. */
class Seo
{
    public ?string $found_on = null;
    public ?string $link = null;
    public ?int $status_code = null;
}

/** Request payload for Seo#list. */
class SeoListMatch
{
    public ?string $found_on = null;
    public ?string $link = null;
    public ?int $status_code = null;
}

/** SeoAnalysi entity data model. */
class SeoAnalysi
{
    public ?array $heading = null;
    public ?array $image = null;
    public ?string $meta_description = null;
    public ?float $score = null;
    public ?string $timestamp = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for SeoAnalysi#load. */
class SeoAnalysiLoadMatch
{
    public ?array $heading = null;
    public ?array $image = null;
    public ?string $meta_description = null;
    public ?float $score = null;
    public ?string $timestamp = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Ssl entity data model. */
class Ssl
{
    public ?int $days_remaining = null;
    public ?string $issuer = null;
    public ?string $timestamp = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public ?string $valid_from = null;
    public ?string $valid_to = null;
}

/** Request payload for Ssl#load. */
class SslLoadMatch
{
    public ?int $days_remaining = null;
    public ?string $issuer = null;
    public ?string $timestamp = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public ?string $valid_from = null;
    public ?string $valid_to = null;
}

/** TechStack entity data model. */
class TechStack
{
    public ?string $category = null;
    public ?string $name = null;
    public ?string $version = null;
}

/** Request payload for TechStack#list. */
class TechStackListMatch
{
    public ?string $category = null;
    public ?string $name = null;
    public ?string $version = null;
}

