import ky from '../util/ky'
import { Team } from '@dambusters/common'
import { ref } from 'vue'

export function useGetTeam (name: string) {
  const team = ref<Team | null>(null)
  const getTeam = async () => {
    const parsed = await ky.get(`teams/${name}`).json() as Team

    team.value = parsed
  }

  return { team, getTeam }
}
