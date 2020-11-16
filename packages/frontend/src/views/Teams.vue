<template lang="pug">
TeamsInfo
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TeamsInfo from '@/components/Teams/TeamsInfo.vue'

export default defineComponent({
  name: 'Teams',
  components: {
    TeamsInfo
  }
})
</script>

<style lang="stylus">
.teams
  background-color #141617
</style>
