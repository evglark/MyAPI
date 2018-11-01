import Router from 'koa-router'
import postController from './controllers'

const router = new Router({ prefix: '/post' })
    .post('/', postController.create)
    .put('/:hash', postController.update)
    .get('/:hash', postController.getPost)
    .delete('/:hash', postController.delete)

export default router.routes();
