<template lang="pug">
BlogPost
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlogPost from '@/components/BlogPost.vue'

export default defineComponent({
  name: 'Blog',
  components: {
    BlogPost
  }
})
</script>

<style lang="stylus">
.blog
  background-color #141617
</style>
