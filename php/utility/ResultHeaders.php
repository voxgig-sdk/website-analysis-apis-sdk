<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK utility: result_headers

class WebsiteAnalysisApisResultHeaders
{
    public static function call(WebsiteAnalysisApisContext $ctx): ?WebsiteAnalysisApisResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
