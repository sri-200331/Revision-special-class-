const express=require('express')

const auth=require('./middleware/auth')
const {checkBlocked,adminCheck}=require('./middleware/authMiddleware')


const app=express()
app.use(express.json())

app.post('/adminCheck',auth,adminCheck,(req,res)=>{
    res.send('admin checked')
})
app.post('/isblocked',auth,checkBlocked,(req,res)=>{
    res.send('isBlocked is not blocked')
})



app.listen(3000,()=>console.log('server is running'))
