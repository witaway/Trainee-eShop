module.exports = function expressModulesLoader(server) {
    
    const bodyParser = require('body-parser')
    
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
}