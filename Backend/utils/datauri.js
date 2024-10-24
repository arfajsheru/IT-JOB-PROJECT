import DataUriParser from "datauri/parser.js"

import path from "path"

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extname = path.extname(file.originalname).toString();
    return parser.format(extname, file.buffer);
}
export default getDataUri;



// DataUriParser: Is class ka use file ko Data URI format me convert karne ke liye kiya jata hai.
// path.extname: Yeh function file ka extension extract karta hai (e.g., .jpg, .png, etc.).
// parser.format(extName, file.buffer): Yeh method file ke buffer aur uske extension ko lekar usko base64 encoded Data URI me convert karta hai.
// file.buffer: Yeh aapke file ka actual data hota hai jo buffer ke form me hota hai, aur aap ise upload karte waqt express/multer ke through paas karte ho (usually jab aapko file uploads handle karne hote hain).