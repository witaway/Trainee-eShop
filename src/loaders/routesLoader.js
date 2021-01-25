const exceptionsHandler = require('../middlewares/exceptionsHandler')

const setupRoutes = (server) => {
    server.use('/products', require('../routes/productRoutes'))
    server.use('/auth',     require('../routes/authRoutes'))
    server.use('/users',    require('../routes/userRoutes'))
    server.use(exceptionsHandler)
};

module.exports = setupRoutes;