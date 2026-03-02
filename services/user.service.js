import { User } from "../models/user.model.js";


export const register = async ({fullname, imagePaths, gender})=>{
    return await User.create({fullname, images: imagePaths, gender});
}