const nodemailer = require('nodemailer');
const mailerConfig = require('../config/mailer.json');

class Mailer {
    constructor() {
        this.transporter = nodemailer.createTransport(
            {
                pool: true,
                maxConnections: 10,
                host: mailerConfig.hostName,
                port: mailerConfig.port,
                secure: mailerConfig.secure,
                auth: {
                    user: mailerConfig.email,
                    pass: mailerConfig.password,
                },
            },
            {
                from: `${mailerConfig.siteName} <${mailerConfig.email}>`,
            },
        );
    }

    async sendMail(email, subject, message) {
        await this.transporter.verify();
        await this.transporter.sendMail({
            to: email,
            subject: subject,
            text: message,
        });
    }
}

module.exports = new Mailer();
