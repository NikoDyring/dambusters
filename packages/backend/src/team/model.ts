import { Document, Schema, Model, model /* Types <- You'll need this eventually */ } from 'mongoose'
import { Team } from '../../../common/src/index'

/*
 * Reading-fabric?
 * https://medium.com/@tomanagle/strongly-typed-models-with-mongoose-and-typescript-7bc2f7197722
 * https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1
 */

// const required = true

export interface TeamBaseDocument extends Team, Document {

}

export type TeamDocument = TeamBaseDocument

const TeamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  }
})

export type TeamModel = Model<TeamDocument>

export default model<TeamDocument, TeamModel>('Team', TeamSchema)
