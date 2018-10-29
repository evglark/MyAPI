import Router from 'koa-router'
import auth from '../modules/auth/router'
import post from '../modules/post/router'

const router = new Router({ prefix: '/api' });

router.use(auth);
router.use(post);

export default router.routes();
