import uploadToS3 from "../middlewares/s3Upload.middleware.js";
import { register } from "../services/user.service.js";
import path from "path";


export const registerController = async (req, res) =>{
    console.log("Files--", req.files);
    try{
        const {fullname, gender} = req.body;
        // let imagePath = null;
        // if(req.file){
        //     imagePath = req.file.path;
        // };

        // for diskStorage means iploads on local
        // let imagePaths = [];
        // if(req.files && req.files.length > 0){
        //     imagePaths = req.files.map((file) => file.path) || [];
        // }
        // console.log(req.body)

         // S3 uploads
         let imageUrls = [];
        if (req.files && req.files.length > 0) {
            const uploadPromises = req.files.map(file => uploadToS3(file));
            imageUrls = await Promise.all(uploadPromises);
        }

        const user = await register({
            fullname,
            imageUrls,
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