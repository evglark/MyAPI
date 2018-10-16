import app from './app'

import { ENV, PORT, MONGO_URL } from './config'

const server = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`${ENV} MODE ON`);


  console.log(`\n//...`);
  console.log(`Mongodb is running on: ${MONGO_URL}`);
  console.log(`Server is running on port: ${PORT}`);
});

export default server
