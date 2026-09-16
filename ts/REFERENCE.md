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
| `loadTime` | `number` | No | Page load time in milliseconds |
| `pageSize` | `number` | No | Total page size in bytes |
| `requests` | `number` | No | Number of HTTP requests |
| `timestamp` | `string` | No | Timestamp of the analysis |
| `url` | `string` | No | The analyzed URL |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Performance().load({ url: 'url' })
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
| `screenshotUrl` | `string` | No | URL to the captured screenshot |
| `timestamp` | `string` | No | Timestamp of the capture |
| `url` | `string` | No | The captured URL |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Screenshot().load({ url: 'url' })
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
| `foundOn` | `string` | No | Page where the broken link was found |
| `link` | `string` | No | The broken link URL |
| `statusCode` | `number` | No | HTTP status code returned |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Seo().list({ url: "example" })
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
| `headings` | `Record<string, any>` | No | Heading tags analysis |
| `images` | `Record<string, any>` | No |  |
| `metaDescription` | `string` | No | Meta description |
| `score` | `number` | No | Overall SEO score |
| `timestamp` | `string` | No | Timestamp of the audit |
| `title` | `string` | No | Page title |
| `url` | `string` | No | The audited URL |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SeoAnalysi().load({ url: 'url' })
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
| `daysRemaining` | `number` | No | Days remaining until expiry |
| `issuer` | `string` | No | Certificate issuer |
| `timestamp` | `string` | No | Timestamp of the check |
| `url` | `string` | No | The analyzed URL |
| `valid` | `boolean` | No | Whether the SSL certificate is valid |
| `validFrom` | `string` | No | Certificate valid from date |
| `validTo` | `string` | No | Certificate expiry date |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Ssl().load({ url: 'url' })
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
| `category` | `string` | No | Technology category |
| `name` | `string` | No | Technology name |
| `version` | `string` | No | Detected version |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TechStack().list({ url: "example" })
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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```ts
const client = new WebsiteAnalysisApisSDK({
  feature: {
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

