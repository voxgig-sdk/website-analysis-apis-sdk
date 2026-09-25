<?php
declare(strict_types=1);

// WebsiteAnalysisApis SDK configuration

class WebsiteAnalysisApisConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "WebsiteAnalysisApis",
                "slug" => "website-analysis-apis",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://51-68-119-197.sslip.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "performance" => [],
                    "screenshot" => [],
                    "seo" => [],
                    "seo_analysi" => [],
                    "ssl" => [],
                    "tech_stack" => [],
                ],
            ],
            "entity" => [
        'performance' => [
          'fields' => [
            [
              'name' => 'loadTime',
              'title' => 'Load Time',
              'type' => '`$NUMBER`',
              'short' => 'Page load time in milliseconds',
            ],
            [
              'name' => 'pageSize',
              'title' => 'Page Size',
              'type' => '`$INTEGER`',
              'short' => 'Total page size in bytes',
            ],
            [
              'name' => 'requests',
              'title' => 'Requests',
              'type' => '`$INTEGER`',
              'short' => 'Number of HTTP requests',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the analysis',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'The analyzed URL',
            ],
          ],
          'name' => 'performance',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/performance',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'performance',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'performance',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'https://example.com',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'screenshot' => [
          'fields' => [
            [
              'name' => 'screenshotUrl',
              'title' => 'Screenshot Url',
              'type' => '`$STRING`',
              'short' => 'URL to the captured screenshot',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the capture',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'The captured URL',
            ],
          ],
          'name' => 'screenshot',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/screenshot',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'screenshot',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'screenshot',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'https://example.com',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'seo' => [
          'fields' => [
            [
              'name' => 'foundOn',
              'title' => 'Found On',
              'type' => '`$STRING`',
              'short' => 'Page where the broken link was found',
            ],
            [
              'name' => 'link',
              'title' => 'Link',
              'type' => '`$STRING`',
              'short' => 'The broken link URL',
            ],
            [
              'name' => 'statusCode',
              'title' => 'Status Code',
              'type' => '`$INTEGER`',
              'short' => 'HTTP status code returned',
            ],
          ],
          'name' => 'seo',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/seo',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'seo',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'seo',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.brokenLinks`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'https://example.com',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'seo_analysi' => [
          'fields' => [
            [
              'name' => 'headings',
              'title' => 'Headings',
              'type' => '`$OBJECT`',
              'short' => 'Heading tags analysis',
            ],
            [
              'name' => 'images',
              'title' => 'Images',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'metaDescription',
              'title' => 'Meta Description',
              'type' => '`$STRING`',
              'short' => 'Meta description',
            ],
            [
              'name' => 'score',
              'title' => 'Score',
              'type' => '`$NUMBER`',
              'short' => 'Overall SEO score',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the audit',
              'format' => 'date-time',
            ],
            [
              'name' => 'title',
              'title' => 'Title',
              'type' => '`$STRING`',
              'short' => 'Page title',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'The audited URL',
            ],
          ],
          'name' => 'seo_analysi',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/seo-audit',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'seo-audit',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'seo-audit',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'https://example.com',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'ssl' => [
          'fields' => [
            [
              'name' => 'daysRemaining',
              'title' => 'Days Remaining',
              'type' => '`$INTEGER`',
              'short' => 'Days remaining until expiry',
            ],
            [
              'name' => 'issuer',
              'title' => 'Issuer',
              'type' => '`$STRING`',
              'short' => 'Certificate issuer',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the check',
              'format' => 'date-time',
            ],
            [
              'name' => 'url',
              'title' => 'Url',
              'type' => '`$STRING`',
              'short' => 'The analyzed URL',
            ],
            [
              'name' => 'valid',
              'title' => 'Valid',
              'type' => '`$BOOLEAN`',
              'short' => 'Whether the SSL certificate is valid',
            ],
            [
              'name' => 'validFrom',
              'title' => 'Valid From',
              'type' => '`$STRING`',
              'short' => 'Certificate valid from date',
              'format' => 'date-time',
            ],
            [
              'name' => 'validTo',
              'title' => 'Valid To',
              'type' => '`$STRING`',
              'short' => 'Certificate expiry date',
              'format' => 'date-time',
            ],
          ],
          'name' => 'ssl',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/ssl',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'ssl',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'ssl',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'https://example.com',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'tech_stack' => [
          'fields' => [
            [
              'name' => 'category',
              'title' => 'Category',
              'type' => '`$STRING`',
              'short' => 'Technology category',
            ],
            [
              'name' => 'name',
              'title' => 'Name',
              'type' => '`$STRING`',
              'short' => 'Technology name',
            ],
            [
              'name' => 'version',
              'title' => 'Version',
              'type' => '`$STRING`',
              'short' => 'Detected version',
            ],
          ],
          'name' => 'tech_stack',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/api/techstack',
                  'segments' => [
                    [
                      'lit' => 'api',
                    ],
                    [
                      'lit' => 'techstack',
                    ],
                  ],
                  'parts' => [
                    'api',
                    'techstack',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.technologies`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'url',
                        'orig' => 'url',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'reqd' => true,
                        'example' => 'https://example.com',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'url',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return WebsiteAnalysisApisFeatures::make_feature($name);
    }
}
