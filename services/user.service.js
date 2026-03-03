import { User } from "../models/user.model.js";


export const register = async ({fullname, imageUrls, gender})=>{
    return await User.create({fullname, images: imageUrls, gender});
}