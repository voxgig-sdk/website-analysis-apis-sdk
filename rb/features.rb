# WebsiteAnalysisApis SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module WebsiteAnalysisApisFeatures
  def self.make_feature(name)
    case name
    when "base"
      WebsiteAnalysisApisBaseFeature.new
    when "test"
      WebsiteAnalysisApisTestFeature.new
    else
      WebsiteAnalysisApisBaseFeature.new
    end
  end
end
