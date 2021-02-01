const mongoose = require('mongoose');
const config   = require('../config/mongoLogger.json');
const schemas = require('./schema');

let connection;

const connect = async () => {
    connection = await mongoose.connect(config.url, config.options);
}

const createInfo = async (infoObject) => {
    try {

        let Info = connection.model("Information", schemas.infoSchema);

        let info = new Info({
            data: infoObject,
            date: new Date()
        });

        await info.save();
    
    } catch(err) {
        console.log(err);
    }
};

const createLog = async (req, data = {}) => {
    try {

        let Log = connection.model("Log", schemas.logSchema);

        let log = new Log({
            url:    req.originalUrl,
            method: req.method,
            body:   req.body || {},
            date:   new Date(),
            data:   data
        });

        await log.save();

    } catch(err) {
        console.log(err);
    }
}

const createError = async (req, err = {}) => {
    try {

        let Error = connection.model("Error", schemas.errorSchema);
        
        let error = new Error({
            url:    req.originalUrl,
            method: req.method,
            body:   req.body || {},
            date:   new Date(),
            error:  err
        });

        await error.save();
        
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    connection,
    connect,
    createLog,
    createInfo,
    createError
}

module.exports.createInfo = createInfo;
module.exports.createLog  = createLog;