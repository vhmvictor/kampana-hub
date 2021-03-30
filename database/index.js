const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config();

const uri = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@kampana-shard-00-00.0ppb7.mongodb.net:27017,kampana-shard-00-01.0ppb7.mongodb.net:27017,kampana-shard-00-02.0ppb7.mongodb.net:27017/" + process.env.DB_NAME +"?ssl=true&replicaSet=atlas-96z7k6-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
}, (req, res) => {
    console.log("Banco de dados conectado!");
});

module.exports = mongoose;
