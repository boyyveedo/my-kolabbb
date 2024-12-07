const Subscriber = require('../model/Subscribe');
const sendConfirmationEmail = require('../mailer/mailer');
const logger = require('../logger/index')

const subscribe = async (req, res) => {
    const { email } = req.body;  // Make sure the email is coming from the request body

    if (!email) {
        logger.warn('Subscription attempt without email');
        return res.status(400).json({ message: 'Email is required!' });
    }

    try {
        const emailFound = await Subscriber.findOne({ email });
        if (emailFound) {
            logger.info(`Subscription attempt with existing email: ${email}`)
            return res.status(400).json({ message: 'This email is already subscribed.' });
        }

        // Create a new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();


        logger.info(`New subscriber added: ${email}`); // Log successful subscription


        // Call sendConfirmationEmail with the correct parameters
        await sendConfirmationEmail(email, 'User');  // 'User' can be replaced by dynamic username if necessary
        logger.info(`Confirmation email sent to: ${email}`);


        res.status(201).json({ message: 'Successfully subscribed! Please check your email for confirmation.' });

    } catch (error) {
        logger.error('Error during subscription:', error);
        res.status(500).json({ message: 'Something went wrong, please try again later.' });
    }
};

module.exports = {
    subscribe
};
