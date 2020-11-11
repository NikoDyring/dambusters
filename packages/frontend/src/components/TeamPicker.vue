<template>
<div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 mt-5">
  <div class="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
    <TeamItem
      v-for="team in teams"
      :key="team.name"
      :team="team"
    />
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import TeamItem from '@/components/Teams/TeamItem.vue'

export default defineComponent({
  name: 'TeamPicker',
  components: { TeamItem },
  setup () {
    return reactive({
      teams: [{
        logo: require('@/assets/images/crests/Pandaren_Crest.webp'),
        name: 'Virnaal',
        description: "Pommy ipsum bent as a nine bob note naff off biscuits nowt, a cuppa unhand me sir hadn't done it in donkey's years sod's law.",
        difficulty: 'Heroic'
      },
      {
        logo: require('@/assets/images/crests/Warrior_Crest.webp'),
        name: 'Ironwall',
        description: 'Started in Tomb of Sargeras, and is the oldest team of the Dambusters,  currently #1 in the guild. 11/12M Nyalotha. They raid 3 days a week, and are looking to push Top #1000 in Shadowlands',
        difficulty: 'Mythic'
      },
      {
        logo: require('@/assets/images/crests/Druid_Crest.webp'),
        name: 'Wildwood',
        description: 'Started late July 2020, They are the third team of the Dambusters, on par with Stonewrought in Nyalotha: 10/12M. They raid 2 days a week. Aim for Shadowlands is cutting edge and try bring competition to the IW team.',
        difficulty: 'Mythic'
      },
      {
        logo: require('@/assets/images/crests/Shaman_Crest.webp'),
        name: 'Stonewrought',
        description: 'Started in Nyalotha. They are the second team made of the Dambusters. They are on par with Wildwood in progression in BFA: 10/12M. They raid 3 days a week. Goal in Shadowlands is Cutting Edge.',
        difficulty: 'Mythic'
      }]
    })
  }
})
</script>

<style lang="stylus">
.team-picker
  background-color #141617

</style>
