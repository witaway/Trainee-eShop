module.exports = function(server) {
    server.use('/products', require('../routes/product'))
}