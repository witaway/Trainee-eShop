const setupRoutes = (server) => {
    server.use('/products', require('../routes/products'))
    server.use('/auth',     require('../routes/auth'))
    server.use('/users',    require('../routes/users'))
};

module.exports = setupRoutes;