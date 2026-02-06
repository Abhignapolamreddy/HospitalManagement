const connectDB=require('./config/db')
const app=require('./app')
const dotenv = require('dotenv')

dotenv.config();
connectDB()
app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})