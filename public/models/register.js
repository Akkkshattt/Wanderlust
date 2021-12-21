const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const userschema = new mongoose.Schema({
    fname :{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
        required:true
    },
   
});

const Register = new mongoose.model("Register",userschema);

module.exports = Register;