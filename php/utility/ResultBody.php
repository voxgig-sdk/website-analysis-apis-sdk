<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK utility: result_body

class WebsiteAnalysisApisResultBody
{
    public static function call(WebsiteAnalysisApisContext $ctx): ?WebsiteAnalysisApisResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
