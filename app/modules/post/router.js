import Router from 'koa-router'
import checkUser from '../user/heandlers/checkUser'
import checkPost from './handlers/checkPost'

import postController from './controllers'

const router = new Router({ prefix: '/post' })
    .post('/', checkUser(), postController.create)

    .param('id', checkPost())
    .put('/:id', checkUser(), postController.update)
    .delete('/:id', checkUser(), postController.delete)
    .get('/:id', postController.getPost)


export default router.routes();
