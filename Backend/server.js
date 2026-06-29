import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
connectDb()
const port=process.env.PORT || 3002
app.get('/',(req,res)=>{
    res.send('get this')
})
app.listen(port,()=>console.log('port is working'))