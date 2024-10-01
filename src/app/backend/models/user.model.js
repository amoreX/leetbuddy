import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },

    username:{
        type:String,
        unique: true,
        required:false,
    },

    friends:[
        {
            type:String,
        }
    ]

})

export const User= mongoose.model("User",userSchema)