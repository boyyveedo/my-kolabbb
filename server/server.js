const express = require("express")
const connectDB = require('./config/db')
const subscriberRoutes = require('./routes/subscribeRoute')
const cors = require('cors')
const morgan = require('morgan')
const logger = require('./logger/index')
const WaitlistSubscriptionValidationMw = require('./validator/subscriber.validator')
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');





const app = express()


app.use(helmet());


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
    max: 5,                  // Allow only 100 requests per IP per 15 minutes
    message: 'Too many requests from this IP, please try again later.',
    headers: true,             // Include rate limit headers in the response
});

app.use(limiter);

app.get('/', (req, res) => {
    logger.info('Home route accessed');
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
            logger.info(`Server is running on PORT: ${PORT}`);
            logger.info("Connected successfully to MongoDB");
        });
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};

start() 