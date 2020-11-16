<template>
<div class="feature-block">
  <div class="flex flex-col w-full bg-#0a0a0a md:flex-row">
    <div class="flex flex-col items-center justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
      <h2 class="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl">BlogPost Title #1</h2>
      <p class="max-w-lg mt-5 text-xl text-gray-500 md:text-base lg:text-xl xl:text-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p class="text-gray-600">
        Written by Zakeovich
      </p>
    </div>
    <div class="w-full md:w-1/2">
      <img :src="require('@/assets/images/blogposts/1.jpg')" class="inset-0 object-cover">
    </div>
  </div>
  <div class="flex flex-col flex-col-reverse w-full #0a0a0a md:flex-row">
    <div class="w-full md:w-1/2">
      <img :src="require('@/assets/images/blogposts/2.jpg')" class="inset-0 object-cover">
    </div>
    <div class="flex flex-col items-start justify-center w-full p-5 md:w-1/2 lg:p-16 xl:p-24">
      <h2 class="max-w-lg text-4xl mx-auto font-light leading-tight text-white md:text-3xl lg:text-4xl">BlogPost Title #2</h2>
      <p class="max-w-lg mt-5 text-xl mx-auto text-gray-500 md:text-base lg:text-xl xl:text-2xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p class="text-gray-600 mx-auto">
        Written by Zakeovich
      </p>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FeatureBlock'
})
</script>
