const nodemailer = require('nodemailer');
require('dotenv').config();
const logger = require('../logger/index');

// Define sendConfirmationEmail function
const sendConfirmationEmail = async (email, username) => {
    console.log('Sending email to:', email); // Log to debug

    // Configure the SMTP transporter with Namecheap SMTP settings or your email provider
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,  // Your SMTP server (e.g., 'server335.web-hosting.com')
        port: process.env.EMAIL_PORT,  // Use 465 for SSL or 587 for TLS
        secure: process.env.EMAIL_SECURE === 'true',  // true for SSL, false for TLS
        auth: {
            user: process.env.EMAIL_USER,  // Your email address (e.g., support@kolabbb.com)
            pass: process.env.EMAIL_PASS,  // Your email password (or app password)
        },
    });

    // Mail options
    const mailOptions = {
        from: process.env.EMAIL_USER,   // Sender's email address
        to: email,                      // Recipient's email address
        subject: 'Confirmation Email',  // Subject of the email
        html: `
            <html>
                <body>
                    <div style="background-color: #f9f9f9; padding: 20px;">
                        <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                            <h1 style="color: #4CAF50; text-align: center;">Welcome to Our Waitlist!</h1>
                            <p>Thank you for subscribing to our waitlist! We're excited to have you on board. We will notify you when our service is available to the public.</p>
                            <p>Best Regards, <br>Kolabbb</p>
                        </div>
                    </div>
                </body>
            </html>
        `,
    };

    try {
        // Attempt to send the email
        await transporter.sendMail(mailOptions);
        logger.info('Confirmation email sent successfully!');
    } catch (error) {
        // Log any errors encountered during sending the email
        logger.error('Error sending confirmation email:', error);
        throw error; // Propagate the error if email sending fails
    }
};

module.exports = sendConfirmationEmail;
