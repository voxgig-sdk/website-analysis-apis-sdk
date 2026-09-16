# WebsiteAnalysisApis SDK feature factory

from websiteanalysisapis_sdk.feature.base_feature import WebsiteAnalysisApisBaseFeature
from websiteanalysisapis_sdk.feature.ratelimit_feature import WebsiteAnalysisApisRatelimitFeature
from websiteanalysisapis_sdk.feature.retry_feature import WebsiteAnalysisApisRetryFeature
from websiteanalysisapis_sdk.feature.test_feature import WebsiteAnalysisApisTestFeature
from websiteanalysisapis_sdk.feature.timeout_feature import WebsiteAnalysisApisTimeoutFeature


_FEATURES = {
    "base": lambda: WebsiteAnalysisApisBaseFeature(),
    "ratelimit": lambda: WebsiteAnalysisApisRatelimitFeature(),
    "retry": lambda: WebsiteAnalysisApisRetryFeature(),
    "test": lambda: WebsiteAnalysisApisTestFeature(),
    "timeout": lambda: WebsiteAnalysisApisTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
