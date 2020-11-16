<template>
<div>
  <img class="object-cover w-24 h-24 rounded-full mx-auto" v-if="team?.logo" :src="team.logo" :alt="`${team?.name}'s logo`" />
  <div class="flex flex-col justify-center mt-2">
    <p class="text-2xl font-bold mx-auto text-white">{{ team?.name }}</p>
    <p class="mb-4 text-base mx-auto text-gray-500 mx-auto">{{ team?.difficulty }}</p>
    <p class="text-sm tracking-wide mx-auto text-center text-gray-200 mx-auto">
      {{ team?.description }}
    </p>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { has, map, allPass } from 'ramda'

export default defineComponent({
  name: 'TeamItem',
  props: {
    team: {
      type: Object,
      validator: allPass(map(has, ['logo', 'name', 'description']))
    }
  }
})
</script>
