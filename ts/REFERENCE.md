# WebsiteAnalysisApis TypeScript SDK Reference

Complete API reference for the WebsiteAnalysisApis TypeScript SDK.


## WebsiteAnalysisApisSDK

### Constructor

```ts
new WebsiteAnalysisApisSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `WebsiteAnalysisApisSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = WebsiteAnalysisApisSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `WebsiteAnalysisApisSDK` instance in test mode.


### Instance Methods

#### `Performance(data?: object)`

Create a new `Performance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PerformanceEntity` instance.

#### `Screenshot(data?: object)`

Create a new `Screenshot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScreenshotEntity` instance.

#### `Seo(data?: object)`

Create a new `Seo` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoEntity` instance.

#### `SeoAnalysi(data?: object)`

Create a new `SeoAnalysi` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeoAnalysiEntity` instance.

#### `Ssl(data?: object)`

Create a new `Ssl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SslEntity` instance.

#### `TechStack(data?: object)`

Create a new `TechStack` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TechStackEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `WebsiteAnalysisApisSDK.test()`.

**Returns:** `WebsiteAnalysisApisSDK` instance in test mode.


---

## PerformanceEntity

```ts
const performance = client.Performance()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Performance().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PerformanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScreenshotEntity

```ts
const screenshot = client.Screenshot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `screenshotUrl` | `string` | No |  |
| `timestamp` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Screenshot().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScreenshotEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoEntity

```ts
const seo = client.Seo()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `foundOn` | `string` | No |  |
| `link` | `string` | No |  |
| `statusCode` | `number` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Seo().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeoAnalysiEntity

```ts
const seo_analysi = client.SeoAnalysi()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `headings` | `Record<string, any>` | No |  |
| `images` | `Record<string, any>` | No |  |
| `metaDescription` | `string` | No |  |
| `score` | `number` | No |  |
| `timestamp` | `string` | No |  |
| `title` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SeoAnalysi().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeoAnalysiEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SslEntity

```ts
const ssl = client.Ssl()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ssl().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SslEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TechStackEntity

```ts
const tech_stack = client.TechStack()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `name` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TechStack().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TechStackEntity` instance with the same client and
options.

#### `client()`

Return the parent `WebsiteAnalysisApisSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new WebsiteAnalysisApisSDK({
  feature: {
    test: { active: true },
  }
})
```

