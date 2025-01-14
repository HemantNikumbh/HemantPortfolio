const {Schema,model,Mongoose} = require("mongoose")

const serviceschema = new Schema({
    service:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    provider:{
        type:String,
        required:true
    }
})


const Service = new model("Service",serviceschema)

module.exports = Service