import Router from 'koa-router'
import auth from '../modules/auth/router'

const router = new Router({ prefix: '/api' });

router.use(auth);

export default router.routes();