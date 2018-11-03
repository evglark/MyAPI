import Router from 'koa-router'
import checkUser from '../user/heandlers/checkUser'

import authController from './controllers'

const router = new Router({ prefix: '/auth' })
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
    .get('/private', checkUser(), authController.getInfoByToken)

export default router.routes();
