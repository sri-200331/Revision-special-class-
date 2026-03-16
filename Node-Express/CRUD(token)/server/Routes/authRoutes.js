const express=require('express')
const router=express.Router()

const authcontroller=require('../controller/authController')
const authmiddleware=require('../Middleware/token')

router.post('/login',authcontroller.userLogin)
router.get('/profile',authmiddleware,authcontroller.userProfile)

module.exports=router