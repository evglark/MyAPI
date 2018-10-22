import Router from 'koa-router'
import authController from './controllers'
import Check from '../../handlers/check'

const router = new Router({ prefix: '/auth' });

router
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)
    .get('/private', Check.user(), (ctx) => ctx.body = ctx.user)

export default router.routes();
