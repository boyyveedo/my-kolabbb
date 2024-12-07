const Joi = require('joi');
const logger = require('../logger/')

// Updated regex to prevent consecutive dots in domain and TLD
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})$/;

// Joi schema for subscribing to the waitlist
const WaitlistSubscriptionSchema = Joi.object({
    email: Joi.string()
        .pattern(emailRegex)
        .required()
        .max(255)
        .trim()
        .messages({
            'string.pattern.base': 'Please provide a valid email address '
        })
});

// Middleware to validate the subscription request
async function WaitlistSubscriptionValidationMw(req, res, next) {
    const email = req.body;

    logger.info("Incoming request body:", email);

    try {

        await WaitlistSubscriptionSchema.validateAsync(email);

        // If validation passes, log success and call next middleware
        logger.info("Validation passed!");
        next();
    } catch (error) {


        next({
            message: error.details[0].message,
            status: 400
        });
    }
}

module.exports = WaitlistSubscriptionValidationMw;
