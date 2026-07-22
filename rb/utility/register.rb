# WebsiteAnalysisApis SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

WebsiteAnalysisApisUtility.registrar = ->(u) {
  u.clean = WebsiteAnalysisApisUtilities::Clean
  u.done = WebsiteAnalysisApisUtilities::Done
  u.make_error = WebsiteAnalysisApisUtilities::MakeError
  u.feature_add = WebsiteAnalysisApisUtilities::FeatureAdd
  u.feature_hook = WebsiteAnalysisApisUtilities::FeatureHook
  u.feature_init = WebsiteAnalysisApisUtilities::FeatureInit
  u.fetcher = WebsiteAnalysisApisUtilities::Fetcher
  u.make_fetch_def = WebsiteAnalysisApisUtilities::MakeFetchDef
  u.make_context = WebsiteAnalysisApisUtilities::MakeContext
  u.make_options = WebsiteAnalysisApisUtilities::MakeOptions
  u.make_request = WebsiteAnalysisApisUtilities::MakeRequest
  u.make_response = WebsiteAnalysisApisUtilities::MakeResponse
  u.make_result = WebsiteAnalysisApisUtilities::MakeResult
  u.make_point = WebsiteAnalysisApisUtilities::MakePoint
  u.make_spec = WebsiteAnalysisApisUtilities::MakeSpec
  u.make_url = WebsiteAnalysisApisUtilities::MakeUrl
  u.param = WebsiteAnalysisApisUtilities::Param
  u.prepare_auth = WebsiteAnalysisApisUtilities::PrepareAuth
  u.prepare_body = WebsiteAnalysisApisUtilities::PrepareBody
  u.prepare_headers = WebsiteAnalysisApisUtilities::PrepareHeaders
  u.prepare_method = WebsiteAnalysisApisUtilities::PrepareMethod
  u.prepare_params = WebsiteAnalysisApisUtilities::PrepareParams
  u.prepare_path = WebsiteAnalysisApisUtilities::PreparePath
  u.prepare_query = WebsiteAnalysisApisUtilities::PrepareQuery
  u.result_basic = WebsiteAnalysisApisUtilities::ResultBasic
  u.result_body = WebsiteAnalysisApisUtilities::ResultBody
  u.result_headers = WebsiteAnalysisApisUtilities::ResultHeaders
  u.transform_request = WebsiteAnalysisApisUtilities::TransformRequest
  u.transform_response = WebsiteAnalysisApisUtilities::TransformResponse
}
