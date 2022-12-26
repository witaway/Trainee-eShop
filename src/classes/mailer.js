const nodemailer = require('nodemailer');
const env = require('../env');

class Mailer {
    constructor() {
        nodemailer.createTransport(
            {
                pool: true,
                maxConnections: env.MAILER_MAX_CONNECTIONS,
                host: env.MAILER_HOSTNAME,
                port: env.MAILER_PORT,
                secure: env.MAILER_USE_SECURED_CONNECTION,
                auth: {
                    user: env.MAILER_AUTH_EMAIL,
                    pass: env.MAILER_AUTH_PASSWORD,
                },
            },
            {
                from: `${env.MAILER_SITE_NAME} <${env.MAILER_AUTH_EMAIL}>`,
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
