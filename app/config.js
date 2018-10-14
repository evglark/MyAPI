import config from 'config'

import envs from './constants/envs'
import env from './utils/env'

if (!envs[env]) throw Error(`Unknown env ${env}`);

export const PORT = process.env.PORT || config.get('port');
export const MONGO_URL = process.env.MONGO_URL || config.get('mongo.URL');
