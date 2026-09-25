

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


describe('SeoAnalysiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApisSDK.test()
    const ent = testsdk.SeoAnalysi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'seo_analysi.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"headings":{"a":true,"h":"Headings","n":"headings","r":false,"sh":"Heading tags analysis","t":"`$OBJECT`","key$":"headings","index$":0},"images":{"a":true,"h":"Images","n":"images","r":false,"t":"`$OBJECT`","key$":"images","index$":1},"metaDescription":{"a":true,"h":"Meta Description","n":"metaDescription","r":false,"sh":"Meta description","t":"`$STRING`","key$":"metaDescription","index$":2},"score":{"a":true,"h":"Score","n":"score","r":false,"sh":"Overall SEO score","t":"`$NUMBER`","key$":"score","index$":3},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":false,"sh":"Timestamp of the audit","t":"`$STRING`","key$":"timestamp","index$":4},"title":{"a":true,"h":"Title","n":"title","r":false,"sh":"Page title","t":"`$STRING`","key$":"title","index$":5},"url":{"a":true,"h":"Url","n":"url","r":false,"sh":"The audited URL","t":"`$STRING`","key$":"url","index$":6}},"name":"seo_analysi","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/seo-audit","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/seo-audit","q":{"exist":["url"]},"r":{},"s":[{"lit":"api"},{"lit":"seo-audit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"seo_analysi","name__orig":"seo_analysi","Name":"SeoAnalysi","name_":"seo_analysi","name-":"seo-analysi","NAME":"SEO_ANALYSI","index$":3}, {"active":true,"entity":"seo_analysi","key$":"BasicSeoAnalysiFlow","kind":"basic","name":"BasicSeoAnalysiFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"seo_analysi_ref01","srcdatavar":"seo_analysi_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-seo_analysi_ref01"}}],"index$":0}]}, 'SeoAnalysi', {"GET /api/seo-audit":{"protocol":"http","operationId":"seoAudit","responses":{"200":{"description":"Successful response with SEO audit results","content":{"application/json":{"schema":{"type":"object","properties":{"url":{"description":"The audited URL","key$":"url","type":"string"},"title":{"description":"Page title","key$":"title","type":"string"},"metaDescription":{"description":"Meta description","key$":"metaDescription","type":"string"},"headings":{"description":"Heading tags analysis","key$":"headings","properties":{"h1":{"description":"Number of H1 tags","type":"integer"},"h2":{"description":"Number of H2 tags","type":"integer"}},"type":"object"},"images":{"key$":"images","properties":{"missingAlt":{"description":"Images missing alt text","type":"integer"},"total":{"description":"Total number of images","type":"integer"}},"type":"object"},"score":{"description":"Overall SEO score","key$":"score","type":"number"},"timestamp":{"description":"Timestamp of the audit","format":"date-time","key$":"timestamp","type":"string"}},"index$":0}}}},"400":{"description":"Bad request - Invalid URL parameter"},"500":{"description":"Internal server error"}},"parameters":[{"name":"url","in":"query","description":"The URL of the website to audit","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let seo_analysi_ref01_data = Object.values(setup.data.existing.seo_analysi)[0] as any

    // LOAD
    const seo_analysi_ref01_ent = client.SeoAnalysi()
    const seo_analysi_ref01_match_dt0: any = {}
    const seo_analysi_ref01_data_dt0 = (await seo_analysi_ref01_ent.load(seo_analysi_ref01_match_dt0)).data()
    assert(null != seo_analysi_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/seo_analysi/SeoAnalysiTestData.json')

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
    ['seo_analysi01','seo_analysi02','seo_analysi03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS_TEST_SEO_ANALYSI_ENTID']
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
  
