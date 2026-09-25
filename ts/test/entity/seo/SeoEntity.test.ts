

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


describe('SeoEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApisSDK.test()
    const ent = testsdk.Seo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'seo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"foundOn":{"a":true,"h":"Found On","n":"foundOn","r":false,"sh":"Page where the broken link was found","t":"`$STRING`","key$":"foundOn","index$":0},"link":{"a":true,"h":"Link","n":"link","r":false,"sh":"The broken link URL","t":"`$STRING`","key$":"link","index$":1},"statusCode":{"a":true,"h":"Status Code","n":"statusCode","r":false,"sh":"HTTP status code returned","t":"`$INTEGER`","key$":"statusCode","index$":2}},"name":"seo","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/seo","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/seo","q":{"exist":["url"]},"r":{},"s":[{"lit":"api"},{"lit":"seo"}],"t":{"req":"`reqdata`","res":"`body.brokenLinks`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"seo","name__orig":"seo","Name":"Seo","name_":"seo","name-":"seo","NAME":"SEO","index$":2}, {"active":true,"entity":"seo","key$":"BasicSeoFlow","kind":"basic","name":"BasicSeoFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"seo_ref01"}}],"index$":0}]}, 'Seo', {"GET /api/seo":{"protocol":"http","operationId":"checkBrokenLinks","responses":{"200":{"description":"Successful response with broken links analysis","content":{"application/json":{"schema":{"type":"object","properties":{"url":{"description":"The analyzed URL","key$":"url","type":"string"},"brokenLinks":{"description":"List of broken links found on the website","items":{"properties":{"foundOn":{"description":"Page where the broken link was found","type":"string","key$":"foundOn"},"link":{"description":"The broken link URL","type":"string","key$":"link"},"statusCode":{"description":"HTTP status code returned","type":"integer","key$":"statusCode"}},"type":"object","index$":0},"key$":"brokenLinks","type":"array"},"totalLinks":{"description":"Total number of links checked","key$":"totalLinks","type":"integer"},"brokenCount":{"description":"Number of broken links found","key$":"brokenCount","type":"integer"},"timestamp":{"description":"Timestamp of the analysis","format":"date-time","key$":"timestamp","type":"string"}}}}}},"400":{"description":"Bad request - Invalid URL parameter","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}},"500":{"description":"Internal server error","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"}}}}}}},"parameters":[{"name":"url","in":"query","description":"The URL of the website to check for broken links","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let seo_ref01_data = Object.values(setup.data.existing.seo)[0] as any

    // LIST
    const seo_ref01_ent = client.Seo()
    const seo_ref01_match: any = {}

    const seo_ref01_list = (await seo_ref01_ent.list(seo_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/seo/SeoTestData.json')

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
    ['seo01','seo02','seo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS_TEST_SEO_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS_TEST_SEO_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS_TEST_SEO_ENTID']
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
  
