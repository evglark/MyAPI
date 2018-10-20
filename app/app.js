import Koa from 'koa'

import initHandlers from './handlers'
import modules from './modules'

const app = new Koa();
initHandlers(app);
app.use(modules, { createIndexes: true });

app.use(async (ctx) => {
  ctx.body = '<h1>Hello World!</h1>'
});

export default app
