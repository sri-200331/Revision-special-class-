const User=require('../models/User')

const checkBlocked=async(req,res,next)=>{

    try{
        const userId=req.user.id
        const user=await User.findById(userId)

        if(!user){
            return res.status(404).json({msg:'user is not found'})
        }
        if(user.isBlocked){
            return res.status(403).json({msg:'user is blocked by admin'})
            
        }
        next()
    }catch(err){
        res.status(500).json({msg:'server error'})
    }

}
const adminCheck=async(req,res,next)=>{
    try{
        const userId=req.user.id
        const user=await User.findById(userId)
        if(!user){
            return res.status(404).json({msg:'user not found'})
        }
        if(user.role!=='admin'){
            return res.status(403).json({msg:'access denied admin only'})
            
        }
        next()
    }catch(err){
        return res.status(500).json({msg:'server error'})
    }

}
module.exports={checkBlocked,adminCheck}