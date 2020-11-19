<template>
  <Application />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Application from '@/components/Application.vue'
export default defineComponent({
  name: 'Blog',
  components: {
    Application
  }
})
</script>
