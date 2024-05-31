const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Puedes usar cualquier otro servicio de correo
    auth: {
        user: 'tuCorreo@gmail.com', // Reemplaza con tu correo
        pass: 'tuContraseña', // Reemplaza con tu contraseña
    },
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'tuCorreo@gmail.com',
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
