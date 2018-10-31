import Router from 'koa-router'
import authController from './controllers'

const router = new Router({ prefix: '/auth' })
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
    .get('/private', authController.getInfoByToken)

export default router.routes();
