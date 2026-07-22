
import { Context } from './Context'


class WebsiteAnalysisApisError extends Error {

  isWebsiteAnalysisApisError = true

  sdk = 'WebsiteAnalysisApis'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  WebsiteAnalysisApisError
}

