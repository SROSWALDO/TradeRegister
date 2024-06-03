const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'oswaldodevelop@hotmail.com',
        pass: 'cashmasciycwujlq',
    },
});

const sendEmail = (from, to, subject, text) => {
    const mailOptions = {
        from: 'oswaldodevelop@hotmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

module.exports = sendEmail;
