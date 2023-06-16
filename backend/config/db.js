import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Połączono: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Błąd: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;