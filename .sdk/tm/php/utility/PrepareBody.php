<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK utility: prepare_body

class WebsiteAnalysisApisPrepareBody
{
    public static function call(WebsiteAnalysisApisContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
