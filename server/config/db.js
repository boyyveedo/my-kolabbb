const mongoose = require('mongoose');
const logger = require('../logger/index')
require('dotenv').config();

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Get the MongoDB URI from the environment variables
        const mongoURI = process.env.MONGO_URI;

        // Check if the URI exists in the environment variables
        if (!mongoURI) {
            logger.error("MongoDB URI is not defined in environment variables.");
            process.exit(1);  // Exit if the URI is not found
        }

        // Connect to the MongoDB database using the URI
        await mongoose.connect(mongoURI, {

        });

        logger.info('MongoDB connected successfully');
    } catch (err) {
        logger.error('Error connecting to MongoDB:', err.message);
        process.exit(1);  // Exit the process if the connection fails
    }
};

module.exports = connectDB;
