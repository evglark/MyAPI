import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'

import { IS_DEV } from '../config/env'
import initHandlers from './handlers'
import router from './router'

const app = new Koa();

initHandlers(app);
if (IS_DEV) app.use(logger());
app.use(bodyParser());
app.use(router, { createIndexes: true });

app.use(async (ctx) => {
  ctx.body = '<h1>Hello World!</h1>'
});

export default app
