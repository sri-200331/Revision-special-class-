// create an API route /products that returns an array of productobjects in JSON format
const express=require('express')
const app=express()

app.get('/products',(req,res)=>{
    const product=[{id:1, name:'manu', Age:13},
                   {id:2, name:'banu', Age:12}]
    res.json(product)               
                   
})

app.listen('3000',()=>console.log('server is running'))