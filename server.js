require('dotenv').config();
const app = require('./app');
const {checkConection} = require('./db/mongoConnection');

checkConection();

app.listen(process.env.PORT, () => {
  console.log(`🏁  Server on ${process.env.PORT}`);
});
