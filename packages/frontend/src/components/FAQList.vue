<template>
  <div class="container mx-auto px-4 h-full">
      <h2 class="text-white font-semibold tracking-tight leading-loose text-center text-3xl lg:text-4xl lg:text-5xl lg:my-8">
          About The Dambusters
      </h2>
      <section class="shadow-md bg-gray-200 overflow-hidden rounded-lg mt-3 sm:shadow-lg lg:mt-8 lg:mx-auto lg:max-w-4xl">
        <FAQListItem
          v-for="item in faqItems"
          :key="item.id"
          :title="item.title"
          :content="item.content"
        />
      </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FAQListItem from './FAQListItem.vue'

export default defineComponent({
  name: 'FAQList',
  components: { FAQListItem },
  data () {
    return {
      faqItems: [
        {
          id: 1,
          title: 'Who is The Dambusters?',
          content: 'Yes, we do! Team pricing is available for any plan. You can take advantage of 30% off for signing up for team pricing of 10 users or more.'
        },
        {
          id: 2,
          title: 'Question 2#?',
          content: 'You can easily change your site settings inside of your site dashboard by clicking the top right menu and clicking the settings button.'
        },
        {
          id: 3,
          title: 'Question 3#?',
          content: 'Our platform works with your content to provides insights and metrics on how you can grow your business and scale your infastructure.'
        }
      ]
    }
  }
})
</script>
