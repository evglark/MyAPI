import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import uuid from 'uuid/v4'

import postSchema from './schema'
import postStatics from './statics'

mongoose.plugin(uniqueValidator);

const PostSchema = postSchema
PostSchema.statics = postStatics

// Middleware
PostSchema.pre('save', function(next) {
  if (!this.hash) this.hash = uuid();

  next();
});

export default mongoose.model('post', PostSchema);
