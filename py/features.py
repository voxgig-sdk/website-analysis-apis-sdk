# WebsiteAnalysisApis SDK feature factory

from feature.base_feature import WebsiteAnalysisApisBaseFeature
from feature.test_feature import WebsiteAnalysisApisTestFeature


def _make_feature(name):
    features = {
        "base": lambda: WebsiteAnalysisApisBaseFeature(),
        "test": lambda: WebsiteAnalysisApisTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
