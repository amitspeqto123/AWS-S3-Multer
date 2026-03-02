import { register } from "../services/user.service.js";
import path from "path";


export const registerController = async (req, res) =>{
    console.log("Body Data", req.body);
    try{
        const {fullname, gender} = req.body;
        let imagePath = null;
        if(req.file){
            imagePath = req.file.path;
        };
        console.log(req.body)
        const user = await register({
         fullname,
         imagepath: imagePath,
         gender
        });
        res.status(201).json({
            success: true,
            mesaage: "User registered successfully",
            user
        })
    }catch(error){
        console.log(error)
    }
}