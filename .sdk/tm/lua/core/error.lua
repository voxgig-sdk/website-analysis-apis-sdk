-- WebsiteAnalysisApis SDK error

local WebsiteAnalysisApisError = {}
WebsiteAnalysisApisError.__index = WebsiteAnalysisApisError


function WebsiteAnalysisApisError.new(code, msg, ctx)
  local self = setmetatable({}, WebsiteAnalysisApisError)
  self.is_sdk_error = true
  self.sdk = "WebsiteAnalysisApis"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WebsiteAnalysisApisError:error()
  return self.msg
end


function WebsiteAnalysisApisError:__tostring()
  return self.msg
end


return WebsiteAnalysisApisError
