# WebsiteAnalysisApis SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module WebsiteAnalysisApisFeatures
  def self.make_feature(name)
    case name
    when "base"
      WebsiteAnalysisApisBaseFeature.new
    when "ratelimit"
      WebsiteAnalysisApisRatelimitFeature.new
    when "retry"
      WebsiteAnalysisApisRetryFeature.new
    when "test"
      WebsiteAnalysisApisTestFeature.new
    when "timeout"
      WebsiteAnalysisApisTimeoutFeature.new
    else
      WebsiteAnalysisApisBaseFeature.new
    end
  end
end
