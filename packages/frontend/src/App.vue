<template lang="pug">
.nav.bg-black
  Navigation
router-view
FooterSimple
</template>

<script lang="ts">
import Navigation from '@/components/Navigation.vue'
import FooterSimple from '@/components/FooterSimple.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Navigation, FooterSimple
  }
})

</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')

#app
  font-family 'Roboto', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

  background-color #0e0f0f
</style>
