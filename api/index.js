require('dotenv').config();
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
PORT = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log('Server is listening at ' + PORT); // eslint-disable-line no-console
  });
});