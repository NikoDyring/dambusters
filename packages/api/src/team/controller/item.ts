import Controller from '@curveball/controller'
import { Context } from '@curveball/core'
import Team from '../model'

class TeamController extends Controller {

  async get(ctx: Context) {

    const team = await Team.findOne({ name: ctx.state.params.name }).exec()

    ctx.response.body = team

  }

}

export default new TeamController()
