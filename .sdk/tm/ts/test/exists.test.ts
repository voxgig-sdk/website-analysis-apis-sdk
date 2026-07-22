
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { WebsiteAnalysisApisSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await WebsiteAnalysisApisSDK.test()
    equal(null !== testsdk, true)
  })

})
