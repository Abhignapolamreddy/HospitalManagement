const connectDB=require('./config/db')

const dotenv = require('dotenv')

dotenv.config();
const app=require('./app')

connectDB()
app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})