
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WebsiteAnalysisApisSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = WebsiteAnalysisApisSDK.test()
    equal(testsdk instanceof WebsiteAnalysisApisSDK, true,
      'WebsiteAnalysisApisSDK.test() must return a client synchronously')
  })

})
