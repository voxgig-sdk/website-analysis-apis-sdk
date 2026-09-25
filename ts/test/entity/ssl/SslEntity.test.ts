

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WebsiteAnalysisApisSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('SslEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApisSDK.test()
    const ent = testsdk.Ssl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ssl.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"daysRemaining":{"a":true,"h":"Days Remaining","n":"daysRemaining","r":false,"sh":"Days remaining until expiry","t":"`$INTEGER`","key$":"daysRemaining","index$":0},"issuer":{"a":true,"h":"Issuer","n":"issuer","r":false,"sh":"Certificate issuer","t":"`$STRING`","key$":"issuer","index$":1},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"sh":"Timestamp of the check","t":"`$STRING`","key$":"timestamp","index$":2},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The analyzed URL","t":"`$STRING`","key$":"url","index$":3},"valid":{"a":true,"h":"Valid","n":"valid","r":false,"sh":"Whether the SSL certificate is valid","t":"`$BOOLEAN`","key$":"valid","index$":4},"validFrom":{"a":true,"fo":"date-time","h":"Valid From","n":"validFrom","r":false,"sh":"Certificate valid from date","t":"`$STRING`","key$":"validFrom","index$":5},"validTo":{"a":true,"fo":"date-time","h":"Valid To","n":"validTo","r":false,"sh":"Certificate expiry date","t":"`$STRING`","key$":"validTo","index$":6}},"name":"ssl","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/ssl","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/ssl","q":{"exist":["url"]},"r":{},"s":[{"lit":"api"},{"lit":"ssl"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"ssl","name__orig":"ssl","Name":"Ssl","name_":"ssl","name-":"ssl","NAME":"SSL","index$":4}, {"active":true,"entity":"ssl","key$":"BasicSslFlow","kind":"basic","name":"BasicSslFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ssl_ref01","srcdatavar":"ssl_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ssl_ref01"}}],"index$":0}]}, 'Ssl', {"GET /api/ssl":{"protocol":"http","operationId":"verifySSL","responses":{"200":{"description":"Successful response with SSL certificate information","content":{"application/json":{"schema":{"type":"object","properties":{"url":{"description":"The analyzed URL","key$":"url","type":"string"},"valid":{"description":"Whether the SSL certificate is valid","key$":"valid","type":"boolean"},"issuer":{"description":"Certificate issuer","key$":"issuer","type":"string"},"validFrom":{"description":"Certificate valid from date","format":"date-time","key$":"validFrom","type":"string"},"validTo":{"description":"Certificate expiry date","format":"date-time","key$":"validTo","type":"string"},"daysRemaining":{"description":"Days remaining until expiry","key$":"daysRemaining","type":"integer"},"timestamp":{"description":"Timestamp of the check","format":"date-time","key$":"timestamp","type":"string"}},"index$":0}}}},"400":{"description":"Bad request - Invalid URL parameter"},"500":{"description":"Internal server error"}},"parameters":[{"name":"url","in":"query","description":"The URL of the website to check SSL certificate","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ssl_ref01_data = Object.values(setup.data.existing.ssl)[0] as any

    // LOAD
    const ssl_ref01_ent = client.Ssl()
    const ssl_ref01_match_dt0: any = {}
    const ssl_ref01_data_dt0 = (await ssl_ref01_ent.load(ssl_ref01_match_dt0)).data()
    assert(null != ssl_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ssl/SslTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WebsiteAnalysisApisSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['ssl01','ssl02','ssl03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS_TEST_SSL_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS_TEST_SSL_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS_TEST_SSL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WebsiteAnalysisApisSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
