# WebsiteAnalysisApis SDK feature factory

from websiteanalysisapis_sdk.feature.base_feature import WebsiteAnalysisApisBaseFeature
from websiteanalysisapis_sdk.feature.test_feature import WebsiteAnalysisApisTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WebsiteAnalysisApisBaseFeature(),
        "test": lambda: WebsiteAnalysisApisTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
