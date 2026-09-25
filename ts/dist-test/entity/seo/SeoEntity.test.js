"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SeoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WEBSITE_ANALYSIS_APIS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WebsiteAnalysisApisSDK.test();
        const ent = testsdk.Seo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'seo.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "foundOn": { "a": true, "h": "Found On", "n": "foundOn", "r": false, "sh": "Page where the broken link was found", "t": "`$STRING`", "key$": "foundOn", "index$": 0 }, "link": { "a": true, "h": "Link", "n": "link", "r": false, "sh": "The broken link URL", "t": "`$STRING`", "key$": "link", "index$": 1 }, "statusCode": { "a": true, "h": "Status Code", "n": "statusCode", "r": false, "sh": "HTTP status code returned", "t": "`$INTEGER`", "key$": "statusCode", "index$": 2 } }, "name": "seo", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/seo", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "https://example.com", "k": "query", "n": "url", "or": "url", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/seo", "q": { "exist": ["url"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "seo" }], "t": { "req": "`reqdata`", "res": "`body.brokenLinks`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "seo", "name__orig": "seo", "Name": "Seo", "name_": "seo", "name-": "seo", "NAME": "SEO", "index$": 2 }, { "active": true, "entity": "seo", "key$": "BasicSeoFlow", "kind": "basic", "name": "BasicSeoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "seo_ref01" } }], "index$": 0 }] }, 'Seo', { "GET /api/seo": { "protocol": "http", "operationId": "checkBrokenLinks", "responses": { "200": { "description": "Successful response with broken links analysis", "content": { "application/json": { "schema": { "type": "object", "properties": { "url": { "description": "The analyzed URL", "key$": "url", "type": "string" }, "brokenLinks": { "description": "List of broken links found on the website", "items": { "properties": { "foundOn": { "description": "Page where the broken link was found", "type": "string", "key$": "foundOn" }, "link": { "description": "The broken link URL", "type": "string", "key$": "link" }, "statusCode": { "description": "HTTP status code returned", "type": "integer", "key$": "statusCode" } }, "type": "object", "index$": 0 }, "key$": "brokenLinks", "type": "array" }, "totalLinks": { "description": "Total number of links checked", "key$": "totalLinks", "type": "integer" }, "brokenCount": { "description": "Number of broken links found", "key$": "brokenCount", "type": "integer" }, "timestamp": { "description": "Timestamp of the analysis", "format": "date-time", "key$": "timestamp", "type": "string" } } } } } }, "400": { "description": "Bad request - Invalid URL parameter", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" } } } } } } }, "parameters": [{ "name": "url", "in": "query", "description": "The URL of the website to check for broken links", "required": true, "schema": { "type": "string", "format": "uri", "example": "https://example.com" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let seo_ref01_data = Object.values(setup.data.existing.seo)[0];
        // LIST
        const seo_ref01_ent = client.Seo();
        const seo_ref01_match = {};
        const seo_ref01_list = (await seo_ref01_ent.list(seo_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/seo/SeoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WebsiteAnalysisApisSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['seo01', 'seo02', 'seo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WEBSITE_ANALYSIS_APIS_TEST_SEO_ENTID': idmap,
        'WEBSITE_ANALYSIS_APIS_TEST_LIVE': 'FALSE',
        'WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['WEBSITE_ANALYSIS_APIS_TEST_SEO_ENTID'];
    const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WEBSITE_ANALYSIS_APIS_TEST_SEO_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WebsiteAnalysisApisSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=SeoEntity.test.js.map