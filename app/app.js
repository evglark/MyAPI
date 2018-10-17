import Koa from 'koa'

import { MONGO_URL } from './config'
import { Connectors as connect } from './connectors'

connect.mongoose(MONGO_URL);
const app = new Koa();

app.use(async (ctx) => {
  ctx.body = '<h1>Hello World!</h1>'
});

export default app
