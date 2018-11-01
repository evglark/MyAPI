import { Schema } from 'mongoose'

export default new Schema({
  hash: {
    type: String,
    unique: 'Hash mast be unique'
  },
  email: {
    type: String,
    unique: 'User with email "{VALUE}" already exist',
    lowercase: true,
    required: 'Email is required',
    trim: true
  },
  password: {
    type: String,
    required: 'Password is required',
    trim: true
  },
  firstName: {
    type: String,
    lowercase: true,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    lowercase: true,
    required: true,
    trim: true
  },
}, { timestamps: true });
