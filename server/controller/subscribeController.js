const Subscriber = require('../model/Subscribe');
const sendConfirmationEmail = require('../mailer/mailer');

const subscribe = async (req, res) => {
    const { email } = req.body;  // Make sure the email is coming from the request body

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    try {
        const emailFound = await Subscriber.findOne({ email });
        if (emailFound) {
            return res.status(400).json({ message: 'This email is already subscribed.' });
        }

        // Create a new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        // Log to check what you're passing to sendConfirmationEmail
        console.log('Email to send confirmation:', email);

        // Call sendConfirmationEmail with the correct parameters
        await sendConfirmationEmail(email, 'User');  // 'User' can be replaced by dynamic username if necessary

        res.status(201).json({ message: 'Successfully subscribed! Please check your email for confirmation.' });

    } catch (error) {
        console.error('Error during subscription:', error);
        res.status(500).json({ message: 'Something went wrong, please try again later.' });
    }
};

module.exports = {
    subscribe
};
