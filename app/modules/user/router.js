import Router from 'koa-router'
import UserController from './controllers'

const router = new Router({ prefix: '/user' })
    .get('/current', UserController.getCurrentUser)
    .get('/:id/posts', UserController.getUserPosts)

export default router.routes();
