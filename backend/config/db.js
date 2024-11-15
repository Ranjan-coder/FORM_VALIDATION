const mongoose = require("mongoose")

const MONGODB_URI = "mongodb+srv://ranjan:ranjan123@cluster0.jwysr.mongodb.net"
const DB_NAME = "formvalidation"


const connectDB = async ()=>{
  try {
    const connectionInstance = await mongoose.connect(`${MONGODB_URI}/${DB_NAME},
      { useNewUrlParser: true, useUnifiedTopology: true }`)
    console.log(`mongodb connected !! DB HOST : ${connectionInstance.connection.host}`)
    
  } catch (error) {
    console.log("Mongodb Connection Error : ", error)
    process.exit(1)
  }
}


module.exports = connectDB 