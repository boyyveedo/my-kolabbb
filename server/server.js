const express = require("express")
const connectDB = require('./config/db')
const subscriberRoutes = require('./routes/subscribeRoute')
const cors = require('cors')
const morgan = require('morgan')
const logger = require('./logger/index')
const redisClient = require('./cache/redis')
const WaitlistSubscriptionValidationMw = require('./validator/subscriber.validator')
const rateLimit = require('express-rate-limit');




const app = express()



app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
}));



const PORT = process.env.PORT
require('dotenv').config();


redisClient.connect()
app.use(express.json())
app.use(morgan('dev'));

// Rate limiter setup with in-memory store (default)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100,                  // Allow only 100 requests per IP per 15 minutes
    message: 'Too many requests from this IP, please try again later.',
    headers: true,             // Include rate limit headers in the response
});

app.use(limiter);

app.get('/', (req, res) => {
    res.send('welcome to Kolabbb')
})
app.use('/api/v1/', WaitlistSubscriptionValidationMw, subscriberRoutes);

//Error handlers
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: err.message });
})


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);  // Connect to DB
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
            console.log("Connected successfully to MongoDB");
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start() 