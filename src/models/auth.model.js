const mongoose = require("mongoose");

let authSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
     email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, "Please use valid email"]
    },
    password:{
        type:String,
        minLength:6,
        required:true,
    },
   
},
{
    timestamps:true
})

let UserModel = mongoose.model("users",authSchema)
module.exports  = UserModel;