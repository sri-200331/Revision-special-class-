// write a middleware that logs the request time for every API call.
const express=require('express')
const app=express()

const logger=async(req,res,next)=>{
    const time=new Date().toLocaleTimeString()
    console.log(time)
    next()
    
}
app.use(logger)

app.get('/',(req,res)=>{
    res.send('welcome to api')
})

app.listen(3000,()=>console.log('server is running'))