# WebsiteAnalysisApis Lua SDK Reference

Complete API reference for the WebsiteAnalysisApis Lua SDK.


## WebsiteAnalysisApisSDK

### Constructor

```lua
local sdk = require("website-analysis-apis_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Performance(data)`

Create a new `Performance` entity instance. Pass `nil` for no initial data.

#### `Screenshot(data)`

Create a new `Screenshot` entity instance. Pass `nil` for no initial data.

#### `Seo(data)`

Create a new `Seo` entity instance. Pass `nil` for no initial data.

#### `SeoAnalysi(data)`

Create a new `SeoAnalysi` entity instance. Pass `nil` for no initial data.

#### `Ssl(data)`

Create a new `Ssl` entity instance. Pass `nil` for no initial data.

#### `TechStack(data)`

Create a new `TechStack` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## PerformanceEntity

```lua
local performance = client:Performance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `loadTime` | `number` | No |  |
| `pageSize` | `number` | No |  |
| `requests` | `number` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Performance():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PerformanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScreenshotEntity

```lua
local screenshot = client:Screenshot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `screenshotUrl` | `string` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Screenshot():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScreenshotEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoEntity

```lua
local seo = client:Seo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `foundOn` | `string` | No |  |
| `link` | `string` | No |  |
| `statusCode` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Seo():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeoAnalysiEntity

```lua
local seo_analysi = client:SeoAnalysi(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headings` | `table` | No |  |
| `images` | `table` | No |  |
| `metaDescription` | `string` | No |  |
| `score` | `number` | No |  |
| `timestamp` | `string` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SeoAnalysi():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeoAnalysiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SslEntity

```lua
local ssl = client:Ssl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysRemaining` | `number` | No |  |
| `issuer` | `string` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |
| `valid` | `boolean` | No |  |
| `validFrom` | `string` | No |  |
| `validTo` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Ssl():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SslEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TechStackEntity

```lua
local tech_stack = client:TechStack(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `name` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TechStack():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TechStackEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

