/* eslint-disable no-unused-vars */
import { Types } from 'mongoose'

export enum Titles {
  GuildMaster = 'Guild Master',
  WarrantOfficer = 'Warrant Officer',
  Officer = 'Officer',
  RaidLeader = 'Raid Leader',
  RaidAssistant = 'Raid Assistant'
}

export interface Player {
  name: string
  title: Titles
  avatar: string
  armory: string
  teams: Types.ObjectId[] | Record<string, unknown>[]
  raiderio: string
  twitch?: string
  country: string
  flag: string
}
