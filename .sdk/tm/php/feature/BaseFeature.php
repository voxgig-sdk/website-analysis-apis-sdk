<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK base feature

class WebsiteAnalysisApisBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(WebsiteAnalysisApisContext $ctx, array $options): void {}
    public function PostConstruct(WebsiteAnalysisApisContext $ctx): void {}
    public function PostConstructEntity(WebsiteAnalysisApisContext $ctx): void {}
    public function SetData(WebsiteAnalysisApisContext $ctx): void {}
    public function GetData(WebsiteAnalysisApisContext $ctx): void {}
    public function GetMatch(WebsiteAnalysisApisContext $ctx): void {}
    public function SetMatch(WebsiteAnalysisApisContext $ctx): void {}
    public function PrePoint(WebsiteAnalysisApisContext $ctx): void {}
    public function PreSpec(WebsiteAnalysisApisContext $ctx): void {}
    public function PreRequest(WebsiteAnalysisApisContext $ctx): void {}
    public function PreResponse(WebsiteAnalysisApisContext $ctx): void {}
    public function PreResult(WebsiteAnalysisApisContext $ctx): void {}
    public function PreDone(WebsiteAnalysisApisContext $ctx): void {}
    public function PreUnexpected(WebsiteAnalysisApisContext $ctx): void {}
}
