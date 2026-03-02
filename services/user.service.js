import { User } from "../models/user.model.js";


export const register = async ({fullname, imagepath, gender})=>{
    return await User.create({fullname, image: imagepath, gender});
}