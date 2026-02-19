const express=require('express')
const app=express()

const authRoute=require('./Routes/authRoutes')

app.use(express.json())
app.use('/auth',authRoute)

app.listen(3000,()=>console.log('server is running'))