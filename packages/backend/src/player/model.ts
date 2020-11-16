import { Document, Schema, Model, model, Types } from 'mongoose'
import { TeamBaseDocument } from '../team/model'
import { Player, Titles } from '@dambusters-website/common/src/index'

/*
 * Reading-fabric?
 * https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
 * https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
 */

// const required = true

export interface PlayerBaseDocument extends Player, Document {

}

const PlayerSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    title: {
      type: Titles,
      enum: Titles,
      required: true
    },
    avatar: {
      type: String,
      required: false
    },
    teams: {
      type: [Types.ObjectId],
      ref: 'Teams',
      required: true
    },
    armory: {
      type: String,
      required: true
    },
    raiderio: {
      type: String,
      required: true
    },
    twitch: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    flag: {
      type: String,
      required: false
    }
})

// Export this for strong typing
export interface PlayerDocument extends PlayerBaseDocument {
  team: TeamBaseDocument["_id"]
}

// Export this for strong typing
export interface PlayerPopulatedDocument extends PlayerBaseDocument {
  team: TeamBaseDocument
}

export type PlayerModel = Model<PlayerDocument>

export default model<PlayerDocument, PlayerModel>('Player', PlayerSchema)
