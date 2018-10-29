import dotenv from 'dotenv'

import env from './env'

dotenv.config()
export const ENV = env
export const PORT = process.env.PORT
export const MONGO_URL = process.env.MONGO_URL
export const JW_TOKEN = process.env.SECRET_WORD
