import express from 'express';
import cors from 'cors';
import connectToMongoDb from './mongodb/connection.js';
const app = express();
const PORT = process.env.PORT || 5000;

import dotenv from 'dotenv'
dotenv.config()

// import files
import instructorRoutes from "./routes/instructorRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import batchRoute from "./routes/batchRoute.js";

// basic configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors configuration
app.use(cors('*'));

// Routes
app.use("/instructors", instructorRoutes);
app.use("/api", courseRoutes);
app.use('/api',batchRoute)


// connection 
const connect = async () => {
    try {
        await connectToMongoDb(); // Connect to MongoDB
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error starting server:", error.message);
        process.exit(1); // Exit process if server fails to start
    }
};
connect();
