import router from '@curveball/router';
import teamController from './team/controller/item'
import teamCollectionController from './team/controller/collection'
import playerController from './player/controller/item'
import playerCollectionController from './player/controller/collection'

export default [
  router('/teams', teamCollectionController),
  router('/teams/:name', teamController),
  router('/players', playerCollectionController),
  router('/players/:name', playerController)
]
