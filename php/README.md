# WebsiteAnalysisApis PHP SDK



The PHP SDK for the WebsiteAnalysisApis API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Performance()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/website-analysis-apis-sdk/releases](https://github.com/voxgig-sdk/website-analysis-apis-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'websiteanalysisapis_sdk.php';

$client = new WebsiteAnalysisApisSDK();
```

### 3. Load a performance

```php
try {
    // load() returns the bare Performance record (throws on error).
    $performance = $client->Performance()->load();
    print_r($performance);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $performance = $client->Performance()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = WebsiteAnalysisApisSDK::test();

// Entity ops return the bare mock record (throws on error).
$performance = $client->Performance()->load();
print_r($performance);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new WebsiteAnalysisApisSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### WebsiteAnalysisApisSDK

```php
require_once 'websiteanalysisapis_sdk.php';
$client = new WebsiteAnalysisApisSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = WebsiteAnalysisApisSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### WebsiteAnalysisApisSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Performance` | `($data): PerformanceEntity` | Create a Performance entity instance. |
| `Screenshot` | `($data): ScreenshotEntity` | Create a Screenshot entity instance. |
| `Seo` | `($data): SeoEntity` | Create a Seo entity instance. |
| `SeoAnalysi` | `($data): SeoAnalysiEntity` | Create a SeoAnalysi entity instance. |
| `Ssl` | `($data): SslEntity` | Create a Ssl entity instance. |
| `TechStack` | `($data): TechStackEntity` | Create a TechStack entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Performance

| Field | Description |
| --- | --- |
| `load_time` |  |
| `page_size` |  |
| `request` |  |
| `timestamp` |  |
| `url` |  |

Operations: Load.

API path: `/api/performance`

#### Screenshot

| Field | Description |
| --- | --- |
| `screenshot_url` |  |
| `timestamp` |  |
| `url` |  |

Operations: Load.

API path: `/api/screenshot`

#### Seo

| Field | Description |
| --- | --- |
| `found_on` |  |
| `link` |  |
| `status_code` |  |

Operations: List.

API path: `/api/seo`

#### SeoAnalysi

| Field | Description |
| --- | --- |
| `heading` |  |
| `image` |  |
| `meta_description` |  |
| `score` |  |
| `timestamp` |  |
| `title` |  |
| `url` |  |

Operations: Load.

API path: `/api/seo-audit`

#### Ssl

| Field | Description |
| --- | --- |
| `days_remaining` |  |
| `issuer` |  |
| `timestamp` |  |
| `url` |  |
| `valid` |  |
| `valid_from` |  |
| `valid_to` |  |

Operations: Load.

API path: `/api/ssl`

#### TechStack

| Field | Description |
| --- | --- |
| `category` |  |
| `name` |  |
| `version` |  |

Operations: List.

API path: `/api/techstack`



## Entities


### Performance

Create an instance: `$performance = $client->Performance();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `load_time` | `float` |  |
| `page_size` | `int` |  |
| `request` | `int` |  |
| `timestamp` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Performance record (throws on error).
$performance = $client->Performance()->load();
```


### Screenshot

Create an instance: `$screenshot = $client->Screenshot();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `screenshot_url` | `string` |  |
| `timestamp` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Screenshot record (throws on error).
$screenshot = $client->Screenshot()->load();
```


### Seo

Create an instance: `$seo = $client->Seo();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `found_on` | `string` |  |
| `link` | `string` |  |
| `status_code` | `int` |  |

#### Example: List

```php
// list() returns an array of Seo records (throws on error).
$seos = $client->Seo()->list();
```


### SeoAnalysi

Create an instance: `$seo_analysi = $client->SeoAnalysi();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `heading` | `array` |  |
| `image` | `array` |  |
| `meta_description` | `string` |  |
| `score` | `float` |  |
| `timestamp` | `string` |  |
| `title` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare SeoAnalysi record (throws on error).
$seo_analysi = $client->SeoAnalysi()->load();
```


### Ssl

Create an instance: `$ssl = $client->Ssl();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `days_remaining` | `int` |  |
| `issuer` | `string` |  |
| `timestamp` | `string` |  |
| `url` | `string` |  |
| `valid` | `bool` |  |
| `valid_from` | `string` |  |
| `valid_to` | `string` |  |

#### Example: Load

```php
// load() returns the bare Ssl record (throws on error).
$ssl = $client->Ssl()->load();
```


### TechStack

Create an instance: `$tech_stack = $client->TechStack();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `name` | `string` |  |
| `version` | `string` |  |

#### Example: List

```php
// list() returns an array of TechStack records (throws on error).
$tech_stacks = $client->TechStack()->list();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── websiteanalysisapis_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`websiteanalysisapis_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$performance = $client->Performance();
$performance->load();

// $performance->data_get() now returns the performance data from the last load
// $performance->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
