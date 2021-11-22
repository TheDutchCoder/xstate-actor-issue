/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, VueWrapper } from '@vue/test-utils'
import App from '../proof.vue'
import { proofMachine } from '../machine'
import { spawn } from 'xstate'

import type { Proof, Asset } from '#/types'
import { nextTick } from '@vue/runtime-core'

let wrapper: VueWrapper<any>

const proof = {} as Proof

const actor = spawn(proofMachine(proof), `proof-${proof.fulfillmentAssetId}`)

beforeEach(() => {
  wrapper = mount(App, {
    props: {
      proofActor: actor,
    },
  })
})

afterEach(() => {
  wrapper.unmount()
})

describe('Proof', () => {
  describe('defaults', () => {
    it('works', async () => {
      expect(wrapper.find('button').exists()).toBe(true)
      expect(wrapper.find('textarea').exists()).toBe(false)

      await wrapper.find('button').trigger('click')

      expect(wrapper.find('button').exists()).toBe(false)
      expect(wrapper.find('textarea').exists()).toBe(true)
    })
  })
})
