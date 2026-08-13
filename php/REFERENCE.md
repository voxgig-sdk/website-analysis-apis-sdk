# WebsiteAnalysisApis PHP SDK Reference

Complete API reference for the WebsiteAnalysisApis PHP SDK.


## WebsiteAnalysisApisSDK

### Constructor

```php
require_once __DIR__ . '/websiteanalysisapis_sdk.php';

$client = new WebsiteAnalysisApisSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WebsiteAnalysisApisSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = WebsiteAnalysisApisSDK::test();
```


### Instance Methods

#### `Performance($data = null)`

Create a new `PerformanceEntity` instance. Pass `null` for no initial data.

#### `Screenshot($data = null)`

Create a new `ScreenshotEntity` instance. Pass `null` for no initial data.

#### `Seo($data = null)`

Create a new `SeoEntity` instance. Pass `null` for no initial data.

#### `SeoAnalysi($data = null)`

Create a new `SeoAnalysiEntity` instance. Pass `null` for no initial data.

#### `Ssl($data = null)`

Create a new `SslEntity` instance. Pass `null` for no initial data.

#### `TechStack($data = null)`

Create a new `TechStackEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): WebsiteAnalysisApisUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## PerformanceEntity

```php
$performance = $client->Performance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `loadTime` | `float` | No |  |
| `pageSize` | `int` | No |  |
| `requests` | `int` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Performance()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PerformanceEntity`

Create a new `PerformanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScreenshotEntity

```php
$screenshot = $client->Screenshot();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `screenshotUrl` | `string` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Screenshot()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScreenshotEntity`

Create a new `ScreenshotEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoEntity

```php
$seo = $client->Seo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `foundOn` | `string` | No |  |
| `link` | `string` | No |  |
| `statusCode` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Seo()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoEntity`

Create a new `SeoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeoAnalysiEntity

```php
$seo_analysi = $client->SeoAnalysi();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headings` | `array` | No |  |
| `images` | `array` | No |  |
| `metaDescription` | `string` | No |  |
| `score` | `float` | No |  |
| `timestamp` | `string` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SeoAnalysi()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeoAnalysiEntity`

Create a new `SeoAnalysiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SslEntity

```php
$ssl = $client->Ssl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysRemaining` | `int` | No |  |
| `issuer` | `string` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |
| `valid` | `bool` | No |  |
| `validFrom` | `string` | No |  |
| `validTo` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Ssl()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SslEntity`

Create a new `SslEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TechStackEntity

```php
$tech_stack = $client->TechStack();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `name` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TechStack()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TechStackEntity`

Create a new `TechStackEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new WebsiteAnalysisApisSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

