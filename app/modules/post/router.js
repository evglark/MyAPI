import Router from 'koa-router'
import checkUser from '../user/heandlers/checkUser'

import postController from './controllers'

const router = new Router({ prefix: '/post' })
    .post('/', checkUser(), postController.create)
    .put('/:id', checkUser(), postController.update)
    .get('/:id', postController.getPost)
    .delete('/:id', checkUser(), postController.delete)

export default router.routes();
