import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import postSchema from './schema'

mongoose.plugin(uniqueValidator);
const PserSchema = postSchema
PserSchema.statics.createFields = ['title', 'content']

export default mongoose.model('post', PserSchema);
