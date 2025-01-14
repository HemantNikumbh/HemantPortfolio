const User = require("../server/validator/model/user-model")
const bcrypt = require("bcryptjs");



const home = async(req,res)=>{
    try{
        res.status(200).send("Hello my dear friends my name is Rajendra");

    }catch(error){
        console.log(error);
        
    }
    
}

const register = async(req,res)=>{
    try{
        const{username,email,phone,password} = req.body;

        const userExist =  await User.findOne({email});

        if(userExist){
            return res.status(400).json({message:"email already exist"});

        }

        /*const saltround = 10;
        const has_password = await bcrypt.hash(password,saltround);*/



        const userCreated =  await User.create({username,email,phone,password});

        res.status(200).json({
            msg:userCreated,
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        });

   }catch(error){
    res.status(500).json("internal error");
   }
};



const login = async(req,res)=>{
    try{
        const{email,password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(200).json({message:"invalid credential"});
        }

        const user = await bcrypt.compare(password, userExist.password);

        if(user){
            res.status(200).json({
                msg:userExist,
                token: await userExist.generateToken(),
                userId:userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({message:"invalid email and password"});
        }

    }catch(error){
        res.status(500).json("internal error");
    }
};


//to send user data-user logic
const user = async(req,res)=>{
    try{
        const userData = req.user;
        console.log(userData)
        res.status(200).json({userData})

    }catch(error){
        console.log("error")
    }
}

module.exports = {register,home,login,user}
