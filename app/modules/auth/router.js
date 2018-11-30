import Router from 'koa-router'

import authController from './controllers'

const router = new Router({ prefix: '/auth' })
    .post('/signup', authController.signUp)
    .post('/signin', authController.signIn)

export default router.routes()
