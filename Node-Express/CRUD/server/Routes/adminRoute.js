const express=require('express')
const router=express.Router()

const authmiddleware=require('../Middleware/auth')
const admincheck=require('../Middleware/adminCheck')

router.get('/users',authmiddleware,admincheck,(req,res)=>{
    res.json({message:'access granted'})
})





module.exports=router