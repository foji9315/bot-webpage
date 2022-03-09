const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 25, //Port: 25 or 465 or 587 or 2525
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER || "74f997a20a48ae",
        pass: process.env.EMAIL_PASS || "e44574794418ae",
    },
});

const emailService = {};

emailService.send = async function (addressTo, addressFrom, subject, message) {
    let info = await transporter.sendMail({
        from: addressFrom, // sender address
        to: addressTo, // list of receivers
        subject: subject, // Subject line
        text: message, // plain text body
    });
    return info;
}

module.exports = emailService;