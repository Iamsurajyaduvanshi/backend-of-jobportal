
// gdfgbdf


import mongoose from "mongoose";

const connectDB = async()=>{
    try{
   const conn = await mongoose.connect(process.env.MONGODB_URL)
   console.log("connected to mongodb")
    }catch(error){
console.log(`mongodb error : ${error}`)
    }
}
export default connectDB;