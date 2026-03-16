// jwt token
const jwt=require('jsonwebtoken')

const SECRET_KEY='mysecretkey'

const userLogin=async(req,res)=>{
    const{email,password}=req.body
    if(email==="test@gmail.com" && password==="123"){
        const payload={
            id:1,
            email:email
        }
        const token=jwt.sign(payload,SECRET_KEY,{
            expiresIn:'1h'
        })
        res.status(200).json({
            message:'login success',
            token:token
        })
    }else{
        res.status(400).json({message:'invalid userid'})
    }
}

const userProfile=(req,res)=>{
    res.json({
        message:'profile data',
        user:req.user
    })
}



module.exports={
    userLogin,
    userProfile
}