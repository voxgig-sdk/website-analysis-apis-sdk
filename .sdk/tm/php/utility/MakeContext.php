<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WebsiteAnalysisApisMakeContext
{
    public static function call(array $ctxmap, ?WebsiteAnalysisApisContext $basectx): WebsiteAnalysisApisContext
    {
        return new WebsiteAnalysisApisContext($ctxmap, $basectx);
    }
}
