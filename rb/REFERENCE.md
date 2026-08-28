# WebsiteAnalysisApis Ruby SDK Reference

Complete API reference for the WebsiteAnalysisApis Ruby SDK.


## WebsiteAnalysisApisSDK

### Constructor

```ruby
require_relative 'WebsiteAnalysisApis_sdk'

client = WebsiteAnalysisApisSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WebsiteAnalysisApisSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = WebsiteAnalysisApisSDK.test
```


### Instance Methods

#### `Performance(data = nil)`

Create a new `Performance` entity instance. Pass `nil` for no initial data.

#### `Screenshot(data = nil)`

Create a new `Screenshot` entity instance. Pass `nil` for no initial data.

#### `Seo(data = nil)`

Create a new `Seo` entity instance. Pass `nil` for no initial data.

#### `SeoAnalysi(data = nil)`

Create a new `SeoAnalysi` entity instance. Pass `nil` for no initial data.

#### `Ssl(data = nil)`

Create a new `Ssl` entity instance. Pass `nil` for no initial data.

#### `TechStack(data = nil)`

Create a new `TechStack` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## PerformanceEntity

```ruby
performance = client.Performance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `loadTime` | `Float` | No | Page load time in milliseconds |
| `pageSize` | `Integer` | No | Total page size in bytes |
| `requests` | `Integer` | No | Number of HTTP requests |
| `timestamp` | `String` | No | Timestamp of the analysis |
| `url` | `String` | No | The analyzed URL |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Performance.load({ "url" => "url" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PerformanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScreenshotEntity

```ruby
screenshot = client.Screenshot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `screenshotUrl` | `String` | No | URL to the captured screenshot |
| `timestamp` | `String` | No | Timestamp of the capture |
| `url` | `String` | No | The captured URL |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Screenshot.load({ "url" => "url" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScreenshotEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoEntity

```ruby
seo = client.Seo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `foundOn` | `String` | No | Page where the broken link was found |
| `link` | `String` | No | The broken link URL |
| `statusCode` | `Integer` | No | HTTP status code returned |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Seo.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeoAnalysiEntity

```ruby
seo_analysi = client.SeoAnalysi
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headings` | `Hash` | No | Heading tags analysis |
| `images` | `Hash` | No |  |
| `metaDescription` | `String` | No | Meta description |
| `score` | `Float` | No | Overall SEO score |
| `timestamp` | `String` | No | Timestamp of the audit |
| `title` | `String` | No | Page title |
| `url` | `String` | No | The audited URL |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SeoAnalysi.load({ "url" => "url" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeoAnalysiEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SslEntity

```ruby
ssl = client.Ssl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysRemaining` | `Integer` | No | Days remaining until expiry |
| `issuer` | `String` | No | Certificate issuer |
| `timestamp` | `String` | No | Timestamp of the check |
| `url` | `String` | No | The analyzed URL |
| `valid` | `Boolean` | No | Whether the SSL certificate is valid |
| `validFrom` | `String` | No | Certificate valid from date |
| `validTo` | `String` | No | Certificate expiry date |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Ssl.load({ "url" => "url" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SslEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TechStackEntity

```ruby
tech_stack = client.TechStack
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `String` | No | Technology category |
| `name` | `String` | No | Technology name |
| `version` | `String` | No | Detected version |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.TechStack.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TechStackEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = WebsiteAnalysisApisSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

