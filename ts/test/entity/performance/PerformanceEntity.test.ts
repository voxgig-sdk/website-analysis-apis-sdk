

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


describe('PerformanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApisSDK.test()
    const ent = testsdk.Performance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'performance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"loadTime":{"a":true,"h":"Load Time","n":"loadTime","r":false,"sh":"Page load time in milliseconds","t":"`$NUMBER`","key$":"loadTime","index$":0},"pageSize":{"a":true,"h":"Page Size","n":"pageSize","r":false,"sh":"Total page size in bytes","t":"`$INTEGER`","key$":"pageSize","index$":1},"requests":{"a":true,"h":"Requests","n":"requests","r":false,"sh":"Number of HTTP requests","t":"`$INTEGER`","key$":"requests","index$":2},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"sh":"Timestamp of the analysis","t":"`$STRING`","key$":"timestamp","index$":3},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The analyzed URL","t":"`$STRING`","key$":"url","index$":4}},"name":"performance","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/performance","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/performance","q":{"exist":["url"]},"r":{},"s":[{"lit":"api"},{"lit":"performance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"performance","name__orig":"performance","Name":"Performance","name_":"performance","name-":"performance","NAME":"PERFORMANCE","index$":0}, {"active":true,"entity":"performance","key$":"BasicPerformanceFlow","kind":"basic","name":"BasicPerformanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"performance_ref01","srcdatavar":"performance_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-performance_ref01"}}],"index$":0}]}, 'Performance', {"GET /api/performance":{"protocol":"http","operationId":"measurePerformance","responses":{"200":{"description":"Successful response with performance metrics","content":{"application/json":{"schema":{"type":"object","properties":{"url":{"description":"The analyzed URL","key$":"url","type":"string"},"loadTime":{"description":"Page load time in milliseconds","key$":"loadTime","type":"number"},"pageSize":{"description":"Total page size in bytes","key$":"pageSize","type":"integer"},"requests":{"description":"Number of HTTP requests","key$":"requests","type":"integer"},"timestamp":{"description":"Timestamp of the analysis","format":"date-time","key$":"timestamp","type":"string"}},"index$":0}}}},"400":{"description":"Bad request - Invalid URL parameter"},"500":{"description":"Internal server error"}},"parameters":[{"name":"url","in":"query","description":"The URL of the website to analyze","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let performance_ref01_data = Object.values(setup.data.existing.performance)[0] as any

    // LOAD
    const performance_ref01_ent = client.Performance()
    const performance_ref01_match_dt0: any = {}
    const performance_ref01_data_dt0 = (await performance_ref01_ent.load(performance_ref01_match_dt0)).data()
    assert(null != performance_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/performance/PerformanceTestData.json')

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
    ['performance01','performance02','performance03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS_TEST_PERFORMANCE_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS_TEST_PERFORMANCE_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS_TEST_PERFORMANCE_ENTID']
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
  
