const Service = require("../server/validator/model/service-model")

const services = async(req,res) => {
    try{

        const response = await Service.find()
        if(!response){
            return res.status(404).json({msg:"No Services Found"})
        }
            res.status(200).json({msg:response})

    }catch(error){
        console.log(`services : ${error}`)

    }
}

module.exports = services