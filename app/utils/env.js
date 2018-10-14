import envs from '../constants/envs'

const ENV = process.env.NODE_ENV || 'development'

export const IS_DEV = ENV === envs.development
export const IS_PROD = ENV === envs.production

export default ENV
