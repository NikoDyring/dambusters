<template>
<div class="teams-info">
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8 lg:py-20">
    <TeamItem :team="team" />
    <div class="grid border-2 border-orange-900 bg-gray-900 p-3 rounded gap-10 my-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
      <TeamMember
      v-for="player in sortedPlayers"
      :key="player"
      v-bind="player"
      />
    </div>
  </div>
  <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p class="inline-block px-3 text-3xl font-semibold tracking-wider text-white uppercase rounded-full bg-teal-accent-400">
          Raid Teams
        </p>
    </div>
  </div>
  <TeamPicker />
</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { ascend, prop, sortWith } from 'ramda'
import TeamItem from './TeamItem.vue'
import TeamMember from './TeamMember.vue'
import TeamPicker from '@/components/TeamPicker.vue'
import { useGetTeam } from '@/composables/teams'
import { useGetAllPlayers } from '@/composables/player'
import { Player, Titles } from '@dambusters-website/common/src/index'

const rankOrder = [Titles.GuildMaster, Titles.WarrantOfficer, Titles.Officer]

function rankComparator (a: Player, b: Player) {
  return rankOrder.indexOf(a.title) - rankOrder.indexOf(b.title)
}

export default defineComponent({
  name: 'TeamsInfo',
  components: { TeamPicker, TeamItem, TeamMember },

  setup () {
    const { team, getTeam } = useGetTeam('Management')
    const { players, getAllPlayers } = useGetAllPlayers()
    getTeam()
    getAllPlayers()

    const sortedPlayers = computed(() => sortWith([
      rankComparator,
      ascend(prop('name'))
    ])(players.value))

    return { team, getTeam, getAllPlayers, sortedPlayers }
  }

})
</script>
