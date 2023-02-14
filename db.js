const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4";

mongoose.set('strictQuery', false)

const connectToMongo = async () => {
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully")
    })
};


module.exports=connectToMongo