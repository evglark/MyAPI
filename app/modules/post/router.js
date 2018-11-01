import Router from 'koa-router'
import postController from './controllers'

const router = new Router({ prefix: '/post' })
    .post('/', postController.create)
    .put('/:id', postController.update)
    .get('/:id', postController.getPost)
    .delete('/:id', postController.delete)

export default router.routes();
