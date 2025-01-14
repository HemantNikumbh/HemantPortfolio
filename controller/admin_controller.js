const User = require("../server/validator/model/user-model")
const Contact = require("../server/validator/model/contact-model")

//Get All User

const getAllUser = async(req,res)=>{
    try{
        const users = await User.find({},{password:0})
        console.log(users)
        if(!users || users.length===0){
        return res.status(404).json({message:"No User Found"})
        }
        return res.status(200).json(users)
    }catch(error){
        console.log(error)
    }

}

//Get All Contacts

const getAllContact = async(req,res)=>{
    try{

        const contacts = await Contact.find()
        console.log(contacts)
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"No Contact Find"})
        }
        return res.status(200).json(contacts)

    }catch(error){
        console.log(error)
    }
}

//Delete User By Id

const deleteUser = async(req,res) =>{
    try{
        const id  = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Successsfully"})


    }catch(error){
        console.log(error)
    }
}

//Get User By Id

const getUserById = async(req,res)=>{
    try{
        const id = req.params.id
        const data = await User.findOne({_id:id},{password:0})
        return res.status(200).json(data)
    }catch(error){
        console.log(error)
    }
}

//Update User By Id

const updateUserById = async(req,res) =>{
    try{
        const id = req.params.id
        const updateUserData = req.body
        const updatedData = await User.updateOne({_id:id},{$set:updateUserData})
        return res.status(200).json(updatedData)
    }catch(error){
        console.log(error)
    }

}

// Delete Contact By ID

const deleteContact = async(req,res)=>{
    try{
        const id = req.params.id
        const DeleteContact= await Contact.deleteOne({_id:id})
        return res.status(200).json(DeleteContact)
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getAllUser,
    getAllContact,
    deleteUser,
    getUserById,
    updateUserById,deleteContact
}