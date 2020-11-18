<template>
  <main class="mt-10">
    <Header />
    <Body />
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/blog/post/Header.vue'
import Body from '@/components/blog/post/Body.vue'
export default defineComponent({
  name: 'BlogPost',
  components: { Header, Body }
})
</script>
