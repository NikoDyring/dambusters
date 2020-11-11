<template>
  <div class="flex">
    <img class="object-cover mt-3 content-center w-16 h-16 mr-4 rounded-full bg-gray-200" :src="avatar" alt="Person" />
    <div class="flex flex-col justify-center">
      <p class="text-sm text-white"><img v-if="flag" class="w-4 h-4 inline-block mr-1" :src="flag">{{ country }}</p>
      <p class="text-lg font-bold text-white"><a :href="armory" v-if="armory" target="_blank">{{ name }}</a></p>
      <p class="text-sm text-gray-600">{{ title }}</p>
      <div class="socials">
        <a v-if="twitch" :href="twitch" target="_blank" class="inline-block mr-2">
          <img class="w-4 h-4" :src="require('@/assets/images/socials/TwitchGlitchWhite.svg')"/>
        </a>
        <a v-if="raiderio" :href="raiderio" target="_blank" class="inline-block">
          <img class="w-4 h-4" :src="require('@/assets/images/socials/RaiderIO.svg')"/>
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

const flags = new Map([
  ['Scotland', require('@/assets/images/flags/scotland.svg')],
  ['Denmark', require('@/assets/images/flags/denmark.svg')],
  ['United Kingdom', require('@/assets/images/flags/united-kingdom.svg')],
  ['Germany', require('@/assets/images/flags/germany.svg')],
  ['Belgium', require('@/assets/images/flags/belgium.svg')],
  ['Sweden', require('@/assets/images/flags/sweden.svg')],
  ['Netherlands', require('@/assets/images/flags/netherlands.svg')],
  ['Australia', require('@/assets/images/flags/australia.svg')]
])

export default defineComponent({
  name: 'TeamMember',
  props: {
    name: {
      type: String,
      default: 'Name'
    },
    title: {
      type: String,
      default: 'Title'
    },
    avatar: {
      type: String,
      default: 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png'
    },
    armory: {
      type: String,
      default: '#'
    },
    raiderio: {
      type: String,
      default: ''
    },
    twitch: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const flag = ref<string | null>(flags.get(props.country))
    watch(() => props.country, () => {
      flag.value = flags.get(props.country)
    })
    return { flag }
  }

})
</script>
