<template>
<div class="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center min-w-screen" :style="{ backgroundImage: 'url(' + require('@/assets/images/hero-background.png') + ')' }">
  <div class="absolute inset-0 w-full h-full">
  </div>
  <div class="flex max-w-6xl mx-auto">
    <div class="container relative flex flex-col px-10 pb-1 pr-12 text-2xl font-hairline text-white">
      <h2 class="relative z-20 text-5xl font-extrabold leading-tight text-white mx-auto text-center">We need you Champion!</h2>
      <p class="relative z-20 block mt-4 text-xl mx-auto text-center">We've created the ultimate resource for turning your culture into a super-powered productivity machine by encouraging collaboration growth, and incentives!</p>
      <div class="flex mt-4">
        <a href="/apply" class="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-lg shadow hover:bg-red-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8 mx-auto">Apply!</a>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HeroCulture',
  components: {

  }
})
</script>
