import ky from 'ky'
import { Team } from '@/common'
import { ref } from 'vue'

export function useGetTeam (name: string) {
  const team = ref<Team | null>(null)
  const getTeam = async () => {
    const parsed = await ky.get(`http://localhost:8500/team/${name}`).json() as Team

    team.value = parsed
  }

  return { team, getTeam }
}
