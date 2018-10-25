import { MONGO_URI } from '../app/config';
import mongooseConnector from '../app/utils/connectors/mongoose-connector';

initSeeds();

async function initSeeds() {
  const mongoConnection = await mongooseConnector(MONGO_URI);
  console.log(mongoConnection)
}
