# WebsiteAnalysisApis SDK utility: make_context
require_relative '../core/context'
module WebsiteAnalysisApisUtilities
  MakeContext = ->(ctxmap, basectx) {
    WebsiteAnalysisApisContext.new(ctxmap, basectx)
  }
end
