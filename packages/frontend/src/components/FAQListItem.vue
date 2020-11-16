<template>
  <article class="border-gray-400 border-b hover:bg-gray-300">
    <div>
      <header @click="selected = !selected" v-bind:class="{ 'bg-gray-300': selected }" class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
        <h3 class="font-semibold text-xl text-gray-800">
          {{ title }}
        </h3>
        <div class="rounded-full border w-7 h-7 flex items-center justify-center hover:bg-gray-200">
          <div class="rounded-full text-gray-500 w-7 h-7 flex items-center justify-center">
            <svg :class="{ 'rotate-90': selected }" class="w-6 h-6 transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </div>
        </div>
      </header>
      <div v-show="selected">
        <div class="pl-8 pr-8 py-5 bg-gray-100 text-gray-700">
          <p>
              {{ content }}
          </p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FAQListItem',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    content: {
      type: String,
      default: 'Content'
    }
  },
  data () {
    return {
      selected: false
    }
  }
})
</script>

<style>

</style>
