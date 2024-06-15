import { Schema, model } from 'mongoose'


const userSchema = new Schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    avatar:{
        type:String
    },
    location:{
        type: String
    },
    refreshToken:{
        type:String
    }
})

export const User = model("User", userSchema)