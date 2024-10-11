
const mongoose = require('mongoose')


const dbURL = process.env.DB_URL 



// DATABASE CONNECTION FUNCTION
const connectDB = async () => {
    try {
      await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Database Connected');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
}

export const GET =()=>{
    connectDB();
    return Response.json({
        Message:"works!"
    })
}

export {connectDB as connecting}  






