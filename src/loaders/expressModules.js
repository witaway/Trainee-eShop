module.exports = function expressModulesLoader(server, passport) {
    
    const bodyParser = require('body-parser')
    const cookieParser = require("cookie-parser");
    
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieParser('secret'))

    server.use(passport.initialize())
}