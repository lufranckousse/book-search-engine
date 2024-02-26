const mongoose = require('mongoose');
const uri = "mongodb+srv://LufrancKousse:LufrancKousse@cluster0.cirfprx.mongodb.net/googlebooks?retryWrites=true&w=majority&appName=Cluster0";

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
