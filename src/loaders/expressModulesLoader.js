const bodyParser       = require('body-parser');
const cookieParser     = require("cookie-parser");
const responseFormater = require('../middlewares/responseFormater');

const setupPassportStrategies = require('./passportStrategiesLoader')

const initExpressModules = (server) => {

    // This module solves problem with unhandled promise rejection
    // https://stackoverflow.com/questions/55504066/how-to-gracefully-handle-promise-rejection-in-express
    require('express-async-errors')

    const passport = require('passport');
    setupPassportStrategies(passport);

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cookieParser('secret'));
    server.use(passport.initialize());

    server.use(responseFormater);
};

module.exports = initExpressModules;