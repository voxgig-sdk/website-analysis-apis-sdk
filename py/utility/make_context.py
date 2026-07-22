# WebsiteAnalysisApis SDK utility: make_context

from core.context import WebsiteAnalysisApisContext


def make_context_util(ctxmap, basectx):
    return WebsiteAnalysisApisContext(ctxmap, basectx)
