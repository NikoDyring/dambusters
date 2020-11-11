<template>
<footer class="w-full text-gray-700 footer-simple body-font mt-5">
  <div class="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
    <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
      <a href="/" class="flex items-center justify-center font-medium text-white title-font md:justify-start">
        <span class="text-xl font-bold tracking-wide text-gray-100 uppercase">
          The Dambusters
        </span>
      </a>
      <p class="mt-2 text-sm text-white">FOR THE HORDE!</p>
    </div>
    <div class="flex flex-wrap flex-grow text-center lg:-mb-10 md:mt-0">
      <div class="w-full px-4 mt-4 lg:w-1/4 md:w-1/4">
        <a class="text-white cursor-pointer hover:text-gray-900" href="#" target="_blank">Send a Message</a>
      </div>
      <div class="w-full px-4 mt-4 lg:w-1/4 md:w-1/4">
        <a class="text-white cursor-pointer hover:text-gray-900" href="#" target="_blank">Terms & Privacy</a>
      </div>
      <div class="w-full px-4 mt-4 lg:w-1/4 md:w-1/4">
        <a class="text-white cursor-pointer hover:text-gray-900" href="#" target="_blank">Help & Resources</a>
      </div>
      <div class="w-full px-4 lg:w-1/4 md:w-1/4 lg:text-right">
        <div class="mt-4">
          <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a class="text-white hover:text-gray-700 mr-1" href="https://discord.gg/pcZsQAG" target="_blank">
              <img :src="require('@/assets/images/socials/Discord-Logo-White.svg')" class="w-6 h-6 hover:text-teal-200"/>
            </a>
            <a class="text-white hover:text-gray-700 mr-1" href="https://raider.io/guilds/eu/kazzak/The%20Dambusters" target="_blank">
              <img :src="require('@/assets/images/socials/RaiderIO.svg')" class="w-6 h-6 hover:text-teal-200"/>
            </a>
            <a class="text-white hover:text-gray-700" href="https://www.warcraftlogs.com/guild/eu/kazzak/the%20dambusters" target="_blank">
              <img :src="require('@/assets/images/socials/warcraftlogs.png')" class="w-6 h-6 hover:text-teal-200"/>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FooterSimple'
})
</script>

<style lang="stylus">
.footer-simple
  background-color #141516
</style>
