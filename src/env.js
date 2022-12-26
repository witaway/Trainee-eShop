const { cleanEnv, str, url, email, port, host, bool, num } = require('envalid');

const env = cleanEnv(process.env, {
    // Port of application running
    PORT: port(),

    // Private key for JWT signing
    JWTPrivateKey: str(),

    // Auth data for database
    DB_NAME: str(),
    DB_USER: str(),
    DB_PASSWORD: str(),
    DB_HOST: host(),
    DB_DIALECT: str(),
    DB_USE_LOGGING: bool(),

    // Auth data for mailer
    MAILER_HOSTNAME: url(),
    MAILER_PORT: port(),
    MAILER_USE_SECURED_CONNECTION: bool(),
    MAILER_MAX_CONNECTIONS: num(),
    MAILER_AUTH_EMAIL: email(),
    MAILER_AUTH_PASSWORD: str(),
    MAILER_SITE_NAME: str(),

    // Auth data for mongo logger
    MONGO_HOST: host(),
    MONGO_PORT: port(),
    MONGO_COLLECTION: str(),
    MONGO_USER: str(),
    MONGO_PASSWORD: str(),
});

module.exports = env;
