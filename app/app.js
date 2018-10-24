import Koa from 'koa'

import initHandlers from './handlers'
import router from './router'

const app = new Koa();
initHandlers(app);
app.use(router, { createIndexes: true });

app.use(async (ctx) => {
  ctx.body = '<h1>Hello World!</h1>'
});

export default app
