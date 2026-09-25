

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


describe('TechStackEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WEBSITE_ANALYSIS_APIS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WEBSITE_ANALYSIS_APIS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WebsiteAnalysisApisSDK.test()
    const ent = testsdk.TechStack()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WEBSITE_ANALYSIS_APIS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'tech_stack.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"sh":"Technology category","t":"`$STRING`","key$":"category","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Technology name","t":"`$STRING`","key$":"name","index$":1},"version":{"a":true,"h":"Version","n":"version","r":false,"sh":"Detected version","t":"`$STRING`","key$":"version","index$":2}},"name":"tech_stack","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/techstack","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"https://example.com","k":"query","n":"url","or":"url","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/techstack","q":{"exist":["url"]},"r":{},"s":[{"lit":"api"},{"lit":"techstack"}],"t":{"req":"`reqdata`","res":"`body.technologies`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"tech_stack","name__orig":"tech_stack","Name":"TechStack","name_":"tech_stack","name-":"tech-stack","NAME":"TECH_STACK","index$":5}, {"active":true,"entity":"tech_stack","key$":"BasicTechStackFlow","kind":"basic","name":"BasicTechStackFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"tech_stack_ref01"}}],"index$":0}]}, 'TechStack', {"GET /api/techstack":{"protocol":"http","operationId":"detectTechStack","responses":{"200":{"description":"Successful response with detected technologies","content":{"application/json":{"schema":{"type":"object","properties":{"url":{"description":"The analyzed URL","key$":"url","type":"string"},"technologies":{"description":"List of detected technologies","items":{"properties":{"category":{"description":"Technology category","type":"string","key$":"category"},"name":{"description":"Technology name","type":"string","key$":"name"},"version":{"description":"Detected version","type":"string","key$":"version"}},"type":"object","index$":0},"key$":"technologies","type":"array"},"timestamp":{"description":"Timestamp of the analysis","format":"date-time","key$":"timestamp","type":"string"}}}}}},"400":{"description":"Bad request - Invalid URL parameter"},"500":{"description":"Internal server error"}},"parameters":[{"name":"url","in":"query","description":"The URL of the website to analyze","required":true,"schema":{"type":"string","format":"uri","example":"https://example.com"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let tech_stack_ref01_data = Object.values(setup.data.existing.tech_stack)[0] as any

    // LIST
    const tech_stack_ref01_ent = client.TechStack()
    const tech_stack_ref01_match: any = {}

    const tech_stack_ref01_list = (await tech_stack_ref01_ent.list(tech_stack_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/tech_stack/TechStackTestData.json')

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
    ['tech_stack01','tech_stack02','tech_stack03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WEBSITE_ANALYSIS_APIS_TEST_TECH_STACK_ENTID': idmap,
    'WEBSITE_ANALYSIS_APIS_TEST_LIVE': 'FALSE',
    'WEBSITE_ANALYSIS_APIS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WEBSITE_ANALYSIS_APIS_TEST_TECH_STACK_ENTID']

  const live = 'TRUE' === env.WEBSITE_ANALYSIS_APIS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WEBSITE_ANALYSIS_APIS_TEST_TECH_STACK_ENTID']
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
  
