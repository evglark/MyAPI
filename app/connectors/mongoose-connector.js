import mongoose from 'mongoose'

mongoose.Promise = Promise

export default (mongoURL) => {
  if (!mongoURL) throw Error('Mongo url is undefined');

  mongoose
      .connect(mongoURL, { useMongoClient: true })
      .then((mongodb) => console.log('Mongo connected'))
      .catch((err) => console.log(err))
};
