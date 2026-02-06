const mongoose=require('mongoose');
const connectDB=async()=>{
    try{
        await
        mongoose.connect(process.env.MONGO_URL)
        console.log('MONGO DB CONNECTED')
    }catch (error){
        console.log('MONGO DB CONNECTION FAILED',error.message)
        process.exit(1)
    }
}
module.exports=connectDB