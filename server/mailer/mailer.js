const nodemailer = require('nodemailer');
require('dotenv').config();
const logger = require('../logger/index')


// Define sendConfirmationEmail function
const sendConfirmationEmail = async (email, username) => {
    console.log('Sending email to:', email); // Log to debug

    const transporter = nodemailer.createTransport({
        service: 'gmail', // For Gmail (You can use any other service)
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Confirmation Email',
        html: `
            <html>
                <body>
                    <div style="background-color: #f9f9f9; padding: 20px;">
                        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                            <h1 style="color: #4CAF50; text-align: center;">Welcome to Our Waitlist!</h1>
                            <p>Thank you for subscribing to our waitlist! We're excited to have you on board. We will notify you when our service is available to the public.</p>
                            <p>Best Regards, <br>Kolabbb </p>
                        </div>
                    </div>
                </body>
            </html>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        logger.info('Confirmation email sent successfully!');
    } catch (error) {
        logger.error('Error sending confirmation email:', error);
        throw error; // Propagate the error if email sending fails
    }
};

module.exports = sendConfirmationEmail;
