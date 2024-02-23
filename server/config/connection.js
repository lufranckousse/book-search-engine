const mongoose = require('mongoose');
const uri = "mongodb+srv://lufranckousse:reacttask@cluster0.k0cfidq.mongodb.net/googlebooks";

mongoose.connect(
  

  //process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks',
  process.env.MONGODB_URI || uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: "googlebooks",
  }
);

module.exports = mongoose.connection;
