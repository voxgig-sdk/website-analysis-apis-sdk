# Typed models for the WebsiteAnalysisApis SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Performance(TypedDict, total=False):
    load_time: float
    page_size: int
    request: int
    timestamp: str
    url: str


class PerformanceLoadMatch(TypedDict, total=False):
    load_time: float
    page_size: int
    request: int
    timestamp: str
    url: str


class Screenshot(TypedDict, total=False):
    screenshot_url: str
    timestamp: str
    url: str


class ScreenshotLoadMatch(TypedDict, total=False):
    screenshot_url: str
    timestamp: str
    url: str


class Seo(TypedDict, total=False):
    found_on: str
    link: str
    status_code: int


class SeoListMatch(TypedDict, total=False):
    found_on: str
    link: str
    status_code: int


class SeoAnalysi(TypedDict, total=False):
    heading: dict
    image: dict
    meta_description: str
    score: float
    timestamp: str
    title: str
    url: str


class SeoAnalysiLoadMatch(TypedDict, total=False):
    heading: dict
    image: dict
    meta_description: str
    score: float
    timestamp: str
    title: str
    url: str


class Ssl(TypedDict, total=False):
    days_remaining: int
    issuer: str
    timestamp: str
    url: str
    valid: bool
    valid_from: str
    valid_to: str


class SslLoadMatch(TypedDict, total=False):
    days_remaining: int
    issuer: str
    timestamp: str
    url: str
    valid: bool
    valid_from: str
    valid_to: str


class TechStack(TypedDict, total=False):
    category: str
    name: str
    version: str


class TechStackListMatch(TypedDict, total=False):
    category: str
    name: str
    version: str
