import mongoose from "mongoose"
import {DB_NAME} from '../constants.js'

const connectDB = async() =>
{
    try{
      const connectionInstance = await mongoose.connect(`mongodb+srv://admin:admin@cluster0.nfv66.mongodb.net/youtube`)
      console.log(`\n MONGODB CONNECTED !!!!  DB HOST : ${connectionInstance.connection.host}` )
    }
    catch(error)
    {
           console.log("MONGODB ERROR " , error)
           process.exit(1);
    }
}

export default connectDB ;