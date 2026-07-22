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
| `load_time` | `Float` | No |  |
| `page_size` | `Integer` | No |  |
| `request` | `Integer` | No |  |
| `timestamp` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Performance.load()
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
| `screenshot_url` | `String` | No |  |
| `timestamp` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Screenshot.load()
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
| `found_on` | `String` | No |  |
| `link` | `String` | No |  |
| `status_code` | `Integer` | No |  |

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
| `heading` | `Hash` | No |  |
| `image` | `Hash` | No |  |
| `meta_description` | `String` | No |  |
| `score` | `Float` | No |  |
| `timestamp` | `String` | No |  |
| `title` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.SeoAnalysi.load()
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
| `days_remaining` | `Integer` | No |  |
| `issuer` | `String` | No |  |
| `timestamp` | `String` | No |  |
| `url` | `String` | No |  |
| `valid` | `Boolean` | No |  |
| `valid_from` | `String` | No |  |
| `valid_to` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Ssl.load()
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
| `category` | `String` | No |  |
| `name` | `String` | No |  |
| `version` | `String` | No |  |

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

