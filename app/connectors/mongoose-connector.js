import mongoose from 'mongoose'
import server from '../server';

mongoose.Promise = Promise

export default (mongoURL) => {
  if (!mongoURL) throw Error('Mongo url is undefined');

  return mongoose
      .connect(mongoURL, { useCreateIndex: true, useNewUrlParser: true })
      .then((mongodb) => console.log('Mongo connected'))
      .catch(async (err) => {
        await console.log(err);
        server.close();
      })
};
