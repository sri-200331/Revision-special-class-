const UserModel=require('../model/userModel')
const bcrypt=require('bcrypt')

const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body

        const existingUser=await UserModel.findOne({email})

        if(existingUser){
           return res.json({msg:'user is already exists'})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const user=new UserModel({
            name,
            email,
            password:hashedPassword
        })

        await user.save()

        res.json({msg:'register successfully'})
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

const loginUser=async(req,res)=>{
    try{
        const{email,password}=req.body

        const user=await UserModel.findOne({email})

        if(!user){
           return res.status(403).json({msg:'user not found'})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({msg:'invalid password'})

        }

        res.json({msg:"login successfully"})

    }catch(error){
       return res.status(500).json({msg:error.msg})
    }
}


module.exports={registerUser,loginUser}