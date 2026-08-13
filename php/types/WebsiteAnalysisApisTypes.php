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
    public ?float $loadTime = null;
    public ?int $pageSize = null;
    public ?int $requests = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Request payload for Performance#load. */
class PerformanceLoadMatch
{
    public ?float $loadTime = null;
    public ?int $pageSize = null;
    public ?int $requests = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Screenshot entity data model. */
class Screenshot
{
    public ?string $screenshotUrl = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Request payload for Screenshot#load. */
class ScreenshotLoadMatch
{
    public ?string $screenshotUrl = null;
    public ?string $timestamp = null;
    public ?string $url = null;
}

/** Seo entity data model. */
class Seo
{
    public ?string $foundOn = null;
    public ?string $link = null;
    public ?int $statusCode = null;
}

/** Request payload for Seo#list. */
class SeoListMatch
{
    public ?string $foundOn = null;
    public ?string $link = null;
    public ?int $statusCode = null;
}

/** SeoAnalysi entity data model. */
class SeoAnalysi
{
    public ?array $headings = null;
    public ?array $images = null;
    public ?string $metaDescription = null;
    public ?float $score = null;
    public ?string $timestamp = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Request payload for SeoAnalysi#load. */
class SeoAnalysiLoadMatch
{
    public ?array $headings = null;
    public ?array $images = null;
    public ?string $metaDescription = null;
    public ?float $score = null;
    public ?string $timestamp = null;
    public ?string $title = null;
    public ?string $url = null;
}

/** Ssl entity data model. */
class Ssl
{
    public ?int $daysRemaining = null;
    public ?string $issuer = null;
    public ?string $timestamp = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public ?string $validFrom = null;
    public ?string $validTo = null;
}

/** Request payload for Ssl#load. */
class SslLoadMatch
{
    public ?int $daysRemaining = null;
    public ?string $issuer = null;
    public ?string $timestamp = null;
    public ?string $url = null;
    public ?bool $valid = null;
    public ?string $validFrom = null;
    public ?string $validTo = null;
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

