import multer from "multer";
import path from "path";
import fs from "fs"

// Local upload images...

// const uploadPath = path.join("uploads");

// if(!fs.existsSync(uploadPath)){
//     fs.mkdirSync(uploadPath);
// }

// const storage = new multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, uploadPath)
//     },
//      filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// })

// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//     if(allowedTypes.includes(file.mimetype)){
//         cb(null, true);
//     }else{
//         cb(new Error("Invalid file type"), false);
    
//     }
// }
// export const upload = multer({storage, limits: {
//     fileSize: 5 * 1024 * 1024  // 5MB
//   }, fileFilter});

// uploads on AWS..
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type"), false);
  }
};

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter,
});