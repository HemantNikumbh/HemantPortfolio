const mongoose = require("mongoose")

URI = process.env.MONGODB_URI ;
const connectDb = async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connection is successfull");

    }catch(error){
        console.error("fail");
        process.exit(0)
    }
};

module.exports = connectDb
