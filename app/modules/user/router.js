import Router from 'koa-router'
import checkUser from './heandlers/checkUser'

import PostController from '../post/controllers'
import UserController from './controllers'

const router = new Router({ prefix: '/user' })
    .get('/current', checkUser(), UserController.getCurrentUser)
    .get('/:id/posts', checkUser(), PostController.getUserPosts)

export default router.routes();
