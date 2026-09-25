"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteAnalysisApisError = void 0;
class WebsiteAnalysisApisError extends Error {
    isWebsiteAnalysisApisError = true;
    sdk = 'WebsiteAnalysisApis';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.WebsiteAnalysisApisError = WebsiteAnalysisApisError;
//# sourceMappingURL=WebsiteAnalysisApisError.js.map