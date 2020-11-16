import Controller from '@curveball/controller'
import { Context } from '@curveball/core'
import Player from '../model'

class PlayerController extends Controller {

  async get(ctx: Context) {

    const player = await Player.findOne({ name: ctx.state.params.name }).exec()

    ctx.response.body = player

  }

}

export default new PlayerController()
