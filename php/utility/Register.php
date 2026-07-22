<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

WebsiteAnalysisApisUtility::setRegistrar(function (WebsiteAnalysisApisUtility $u): void {
    $u->clean = [WebsiteAnalysisApisClean::class, 'call'];
    $u->done = [WebsiteAnalysisApisDone::class, 'call'];
    $u->make_error = [WebsiteAnalysisApisMakeError::class, 'call'];
    $u->feature_add = [WebsiteAnalysisApisFeatureAdd::class, 'call'];
    $u->feature_hook = [WebsiteAnalysisApisFeatureHook::class, 'call'];
    $u->feature_init = [WebsiteAnalysisApisFeatureInit::class, 'call'];
    $u->fetcher = [WebsiteAnalysisApisFetcher::class, 'call'];
    $u->make_fetch_def = [WebsiteAnalysisApisMakeFetchDef::class, 'call'];
    $u->make_context = [WebsiteAnalysisApisMakeContext::class, 'call'];
    $u->make_options = [WebsiteAnalysisApisMakeOptions::class, 'call'];
    $u->make_request = [WebsiteAnalysisApisMakeRequest::class, 'call'];
    $u->make_response = [WebsiteAnalysisApisMakeResponse::class, 'call'];
    $u->make_result = [WebsiteAnalysisApisMakeResult::class, 'call'];
    $u->make_point = [WebsiteAnalysisApisMakePoint::class, 'call'];
    $u->make_spec = [WebsiteAnalysisApisMakeSpec::class, 'call'];
    $u->make_url = [WebsiteAnalysisApisMakeUrl::class, 'call'];
    $u->param = [WebsiteAnalysisApisParam::class, 'call'];
    $u->prepare_auth = [WebsiteAnalysisApisPrepareAuth::class, 'call'];
    $u->prepare_body = [WebsiteAnalysisApisPrepareBody::class, 'call'];
    $u->prepare_headers = [WebsiteAnalysisApisPrepareHeaders::class, 'call'];
    $u->prepare_method = [WebsiteAnalysisApisPrepareMethod::class, 'call'];
    $u->prepare_params = [WebsiteAnalysisApisPrepareParams::class, 'call'];
    $u->prepare_path = [WebsiteAnalysisApisPreparePath::class, 'call'];
    $u->prepare_query = [WebsiteAnalysisApisPrepareQuery::class, 'call'];
    $u->result_basic = [WebsiteAnalysisApisResultBasic::class, 'call'];
    $u->result_body = [WebsiteAnalysisApisResultBody::class, 'call'];
    $u->result_headers = [WebsiteAnalysisApisResultHeaders::class, 'call'];
    $u->transform_request = [WebsiteAnalysisApisTransformRequest::class, 'call'];
    $u->transform_response = [WebsiteAnalysisApisTransformResponse::class, 'call'];
});
