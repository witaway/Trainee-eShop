const passport = require("passport");
const exceptionsHandler = require('../middlewares/exceptionsHandler')

const setupRoutes = (server) => {
    
    // Doesn't need authentication
    server.use('/auth',     require('../routes/authRoutes'))
    
    // Do need authentication
    server.use(passport.authenticate("jwt", { session: false }));
    server.use('/products',  require('../routes/productRoutes'));
    server.use('/users',     require('../routes/userRoutes'));
    server.use('/analytics', require('../routes/analyticsRoutes'));
    
    // Exceptions handling
    server.use(exceptionsHandler)
};

module.exports = setupRoutes;