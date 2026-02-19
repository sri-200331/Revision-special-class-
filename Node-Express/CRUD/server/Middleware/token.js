const jwt=require('jsonwebtoken')

const SECRET_KEY='mysecretkey'

const Token=(req,res,next)=>{
    const authHeader=req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ') ){
        res.status(400).json({msg:'missing token'})
    }

    const tokenValue=authHeader.split(" ")[1]

    try{
        const decoded=jwt.verify(tokenValue,SECRET_KEY)
        req.user=decoded
        next()
    }catch(err){
        res.status(401).json({msg:'invalid token'})
    }
}

module.exports=Token