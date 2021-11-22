import { createMachine } from 'xstate'

import type { Proof } from '#/types'
import type { StateMachine } from 'xstate'

type DeclineEvent = { type: 'DECLINE'; }

export type Context = {
  proof: any;
  reason: '',
}

export type Events =
  | DeclineEvent

export const proofMachine = (proof: Proof): StateMachine<Context, Record<string, unknown>, Events> => createMachine<Context, Events>({
  id: 'proofMachine',
  context: {
    proof,
    reason: '',
  },
  initial: 'review',
  states: {
    review: {
      on: {
        DECLINE: 'decline',
      },
    },
    decline: {},
  },
})
