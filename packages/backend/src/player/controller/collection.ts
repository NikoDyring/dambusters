import Controller from '@curveball/controller'
import { Context } from '@curveball/core'
import Player from '../model'

class PlayerCollectionController extends Controller {

  async get(ctx: Context) {

    const players = await Player.find().sort({title: 1, name: 1}).exec()
    ctx.response.body = players

  }

}

export default new PlayerCollectionController();
