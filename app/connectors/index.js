import { MONGO_URL } from '../config'
import mongooseConnector from './mongoose-connector'

const connectorsInit = () => {
  mongooseConnector(MONGO_URL)
}

export { mongooseConnector }

export default connectorsInit
