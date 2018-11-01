import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import postSchema from './schema'
import postStatics from './statics'

mongoose.plugin(uniqueValidator);

const PostSchema = postSchema
PostSchema.statics = postStatics

// Middleware
PostSchema.pre('save', function(next) {
  next();
});

export default mongoose.model('post', PostSchema);
