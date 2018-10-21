import config from 'config'
import dotenv from 'dotenv'

import env from './utils/env'

dotenv.config()

export const ENV = env
export const PORT = process.env.PORT || config.get('PORT');
export const MONGO_URL = process.env.MONGO_URL || config.get('mongo.URL');
export const JW_TOKEN = config.get('JsonWebToken.secret');
