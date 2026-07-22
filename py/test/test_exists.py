# ProjectName SDK exists test

import pytest
from websiteanalysisapis_sdk import WebsiteAnalysisApisSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = WebsiteAnalysisApisSDK.test(None, None)
        assert testsdk is not None
