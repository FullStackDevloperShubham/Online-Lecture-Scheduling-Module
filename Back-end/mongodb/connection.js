import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const connectionToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL );
        console.log("✅ Connected to MongoDB successfully");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectionToMongoDb;
