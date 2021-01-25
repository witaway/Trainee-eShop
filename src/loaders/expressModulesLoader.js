const bodyParser       = require('body-parser');
const cookieParser     = require("cookie-parser");
const responseFormater = require('../middlewares/responseFormater');

const setupPassportStrategies = require('./passportStrategiesLoader')

const initExpressModules = (server) => {

    const passport = require('passport');
    setupPassportStrategies(passport);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser('secret'));
    server.use(passport.initialize());

    server.use(responseFormater);
};

module.exports = initExpressModules;