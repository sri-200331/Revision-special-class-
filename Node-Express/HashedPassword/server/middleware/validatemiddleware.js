const validateRegister=(req,res,next)=>{
    const {name,email,password}=req.body

    if(!name||!email||!password){
       return res.json({msg:'all fields are required'})
    }
    next()
}

module.exports= {validateRegister}