const mongoose = require('mongoose');

const {
  MONGO_USER, MONGO_PASS, MONGO_CLUSTER, MONGO_DB_NAME, NODE_ENV,
} = process.env;
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);

let isConnected = false;

const connectDB = async () => {
  try {
    const URI = `mongodb${NODE_ENV !== 'develop' ? '+srv' : ''}://${MONGO_CLUSTER}.mongodb.net`;
    const options = {
      poolSize: 5,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      user: MONGO_USER,
      pass: MONGO_PASS,
      dbName: MONGO_DB_NAME,
    };
    
    const dbs = await mongoose.connect(URI, options);
    if (dbs.connections[0].readyState === 1) {
      console.log('🌴 Connected to MongoDB');
      isConnected = true;
    }
  } catch (error) {
    throw ('💥 Error on mongoDB conection: ', error);
  }
};

const checkConection = async () => {
  if (isConnected === false) {
    const conection = await connectDB();
    return conection;
  }
  return isConnected;
};

module.exports = {
    checkConection
}