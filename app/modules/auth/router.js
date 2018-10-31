import Router from 'koa-router'
import authController from './controllers'

const router = new Router({ prefix: '/auth' })
    .post('/signup', authController.signUp)
    .post('/login', authController.logIn)
    .get('/private', authController.getInfoByToken)

export default router.routes();
