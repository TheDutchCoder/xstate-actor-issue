<template>
  <div v-if="state.matches('review')">
    <button @click="handleDecline">
      Decline
    </button>
  </div>

  <div v-if="state.matches('decline')">
    <textarea
      id="test"
      name="test"
      cols="30"
      rows="10"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useActor } from '@xstate/vue'
import { proofMachine } from './machine'

import type { PropType } from 'vue'
import type { ActorRefFrom } from 'xstate'

export default defineComponent({
  name: 'Proof',

  props: {
    proofActor: {
      type: Object as PropType<ActorRefFrom<typeof proofMachine>>,
      required: true,
    },
  },

  emits: ['approve', 'decline'],

  setup (props) {
    const { state, send } = useActor(props.proofActor)

    const handleDecline = () => {
      console.log('decline')
      send('DECLINE')
    }

    return {
      state,
      handleDecline,
    }
  },
})
</script>
