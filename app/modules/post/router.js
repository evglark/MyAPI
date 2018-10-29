import Router from 'koa-router'
import postController from './controllers'

const router = new Router({ prefix: '/post' })
    .post('/', postController.create)
    .put('/:id', postController.update)

export default router.routes();
