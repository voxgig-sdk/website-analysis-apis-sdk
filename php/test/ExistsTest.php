<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK exists test

require_once __DIR__ . '/../websiteanalysisapis_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = WebsiteAnalysisApisSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
