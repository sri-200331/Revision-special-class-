// create an API  route /profile that returns user profile data
const express=require('express')
const app=express()

app.get('/Profile',(req,res)=>{
    const user={id:1, name : 'Poomani', age:13}
    res.json(user)
})

app.listen(3000,()=>console.log('server is running'))