const express=require('express')
const cors=require('cors')

const authRoutes=require('./Routes/authRoutes')
const connectDB=require('./config/db')


const app=express()
connectDB()

app.use(express.json())
app.use(cors())

app.use('/api',authRoutes)

app.listen(5000,()=>console.log('server is running'))