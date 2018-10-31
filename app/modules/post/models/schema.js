import { Schema } from 'mongoose'

export default new Schema({
  hash: {
    type: String,
    unique: 'Hash mast be unique'
  },
  userId: {
    type: String,
    equired: 'User ID is required'
  },
  title: {
    type: String,
    required: 'Title is required',
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  }
}, { timestamp: true });
