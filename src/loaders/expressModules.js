module.exports = function expressModulesLoader(server, passport) {
    
    const bodyParser = require('body-parser')
    const cookieParser = require("cookie-parser");
    const responseFormater = require('../middlewares/responseFormater')

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieParser('secret'))

    server.use(passport.initialize())

    server.use(responseFormater)
}