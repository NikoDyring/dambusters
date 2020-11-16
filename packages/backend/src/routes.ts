import router from '@curveball/router';
import homeController from './home/controller';
import teamController from './team/controller/item'
import teamCollectionController from './team/controller/collection'
import playerController from './player/controller/item'
import playerCollectionController from './player/controller/collection'

export default [
  router('/', homeController),
  router('/team', teamCollectionController),
  router('/team/:name', teamController),
  router('/player', playerCollectionController),
  router('/player/:name', playerController)
]