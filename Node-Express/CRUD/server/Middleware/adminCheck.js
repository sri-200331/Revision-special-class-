const User=require('./model/useModel')

const adminCheck=async(req,res,next)=>{
    try{
        const UserId=req.user.Id
        const user=await User.findbyId(UserId)
        if(!user){
            return res.status(404).json({message:'user not found'})
        }
        if(user!=='admin'){
            return res.status(403).json({message:'access denied user only'})
        }
        next()

    }catch(err){
        return res.status(505).json({message:'server error'})
    }
}


module.exports=adminCheck