const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const contactschema = new mongoose.Schema({
    firstname :{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    complain:{
        type:String,
        required:true,
    }
   
});

const contact = new mongoose.model("Contact",contactschema);

module.exports = contact;