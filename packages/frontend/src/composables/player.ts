import { Player, Titles } from '@dambusters/common'
import { ref } from 'vue'
import ky from '../util/ky'

export function useGetPlayer () {
  const player = ref<Player | null>(null)
  const getPlayer = async () => {
    const parsed: Player = {
      name: 'Nikolaj',
      title: Titles.Officer,
      avatar: 'https://3znvnpy5ek52a26m01me9p1t-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/noimage_person.png',
      armory: '#',
      teams: [],
      raiderio: '#',
      twitch: '#',
      country: 'Denmark',
      flag: ''
    }

    player.value = parsed
  }

  return { player, getPlayer }
}

export function useGetAllPlayers () {
  const players = ref<Player[]>([])
  const getAllPlayers = async () => {
    const parsed = await ky.get('players').json() as Player[]

    players.value = parsed
  }

  return { players, getAllPlayers }
}
