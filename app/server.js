import app from './app'

import { ENV, PORT, MONGO_URL } from '../config'
import { Connectors as connect } from './utils/connectors'

connect.mongoose(MONGO_URL);

const server = app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`${ENV} MODE ON`);

  console.log(`\n//...`);
  console.log(`Server is running on port: ${PORT}`);
});

export default server
