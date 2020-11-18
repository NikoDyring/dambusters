<template>
  <div class="navigation">
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="relative flex items-center justify-between">
        <a
          href="/"
          aria-label="The Dambusters"
          title="The Dambusters"
          class="inline-flex items-center"
        >
          <img class="h-8 w-8" src="../assets/images/dambustericon.webp">
          <span
            class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >The Dambusters</span
          >
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Our Home"
              title="Our Home"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >HOME</a
            >
          </li>
          <li>
            <a
              href="/teams"
              aria-label="Our Teams"
              title="Our Teams"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            >
            TEAMS
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >ABOUT US</a
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <img class="h-8 w-8" src="../assets/images/dambustericon.webp">
          </button>
          <transition name="fade-down">
            <div v-if="isMenuOpen" class="absolute z-10 top-0 left-0 w-full">
              <div class="p-5 navigation border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center"
                    >
                      <svg
                        class="w-8 text-white"
                        viewBox="0 0 24 24"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                      </svg>
                      <span
                        class="ml-2 text-xl font-bold tracking-wide text-white uppercase"
                        >The Dambusters</span
                      >
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      @click="isMenuOpen = false"
                    >
                      <svg class="w-5 text-white" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our Home"
                        title="Our Home"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >HOME</a
                      >
                    </li>
                    <li>
                      <a
                        href="/teams"
                        aria-label="Our Home"
                        title="Our Home"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >TEAMS</a
                      >
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >ABOUT US</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
  data () {
    return {
      isMenuOpen: false
    }
  }
})

</script>

<style lang="stylus">
.navigation
  background-color #141516

.font-color
  color #e8e6e3

.fade-down-enter-active,
.fade-down-leave-active
  transition all 0.2s ease-out

.fade-down-enter-from,
.fade-down-leave-to
  transform translateY(-20px)
  opacity 0

</style>
