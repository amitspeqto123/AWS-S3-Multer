import mongoose from "mongoose";


export const s3DB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database connected Successfully..")
    }catch(error){
        console.log("Database connection failded..", error);
    }
}
