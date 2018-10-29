import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

import userSchema from './schema'
// import userStatics from './statics'
import userMethods from './methods'
import userMiddleware from './middleware'

mongoose.plugin(uniqueValidator);

const UserSchema = userSchema
// UserSchema.statics = userStatics
UserSchema.statics.createFields = ['email', 'firstName', 'lastName', 'password']
UserSchema.methods = userMethods

UserSchema.pre('save', userMiddleware.preSave);

export default mongoose.model('user', UserSchema);
