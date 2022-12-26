const passport = require('passport');
const exceptionsHandler = require('../middlewares/exceptions-handler');
const loggerMiddleware = require('../middlewares/logger');

const setupRoutes = (server) => {
    // Logging
    server.use(loggerMiddleware);

    // Doesn't need authentication
    server.use('/auth', require('../routes/auth-routes'));

    // Do need authentication
    server.use(passport.authenticate('jwt', { session: false }));
    server.use('/products', require('../routes/product-routes'));
    server.use('/users', require('../routes/user-routes'));
    server.use('/analytics', require('../routes/analytics-routes'));

    // Exceptions handling
    server.use(exceptionsHandler);
};

module.exports = setupRoutes;
