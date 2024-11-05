const Contact  = require('../server/validator/model/contact-model')

const constactform = async(req,res)=>{
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:'meassage send successfully'});


    }catch(error){
        return res.status(500).json({message:"message not send"});

        
    }
}

module.exports = constactform