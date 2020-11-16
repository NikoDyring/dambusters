<template lang="pug">
HeroCulture
FeatureBlock
.container.mx-auto
  .teams
    <div class="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
        <div>
          <p class="inline-block px-3 text-3xl font-semibold tracking-wider text-white uppercase">Raid Teams
          </p>
        </div>
      </div>
    </div>
    TeamPicker
  .about-us
    FAQList
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroCulture from '@/components/HeroCulture.vue'
import FeatureBlock from '@/components/FeatureBlock.vue'
import TeamPicker from '@/components/TeamPicker.vue'
import FAQList from '@/components/FAQList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    FeatureBlock, HeroCulture, TeamPicker, FAQList
  }
})
</script>

<style lang="stylus">
body
  background-color #0a0a0a
</style>
