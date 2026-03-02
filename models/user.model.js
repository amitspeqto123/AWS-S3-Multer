import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
        
    },
    // image: {
    //     type: String
    // },
    images: [
        {
            type: String
        }
    ],
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    }
},{timestamps: true})

export const User = new mongoose.model("User", userSchema);