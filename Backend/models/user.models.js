import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    }, 
    password:{
        type:String,
        required:true,
        minLength:[4,"password should be long" ],
        maxLength:[13,"password should not exceed the length of 13"]

    }
},{timestamps:true})
export const User=mongoose("User",userSchema)