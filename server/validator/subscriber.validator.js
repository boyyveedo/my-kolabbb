const Joi = require('joi');

// Updated regex to prevent consecutive dots in domain and TLD
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+(\.[a-zA-Z]{2,})$/;

// Joi schema for subscribing to the waitlist
const WaitlistSubscriptionSchema = Joi.object({
    email: Joi.string()
        .pattern(emailRegex)  // Apply the custom regex
        .required()
        .max(255)
        .trim()
        .messages({
            'string.pattern.base': 'Please provide a valid email address with a proper TLD.'
        })
});

// Middleware to validate the subscription request
async function WaitlistSubscriptionValidationMw(req, res, next) {
    const subscriptionPayload = req.body;

    // Log the incoming request body for debugging (consider removing in production)
    console.log("Incoming request body:", subscriptionPayload);

    try {
        // Log before validating the payload
        console.log("Validating subscription payload...");

        // Validate the incoming request body against the Joi schema
        await WaitlistSubscriptionSchema.validateAsync(subscriptionPayload);

        // If validation passes, log success and call next middleware
        console.log("Validation passed!");
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        // If validation fails, log the error and pass the error message to the next middleware
        console.log("Validation failed:", error.details[0].message);

        // Pass the error to the next middleware (error handler)
        next({
            message: error.details[0].message,
            status: 400  // Bad request due to validation failure
        });
    }
}

module.exports = WaitlistSubscriptionValidationMw;
