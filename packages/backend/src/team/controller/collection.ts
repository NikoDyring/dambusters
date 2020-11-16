import Controller from '@curveball/controller';
import { Context } from '@curveball/core';
import Team from '../model'

class TeamCollectionController extends Controller {

  async get(ctx: Context) {

    const teams = await Team.find().sort({name: 1}).exec()

    ctx.response.body = teams

  }

}

export default new TeamCollectionController();
