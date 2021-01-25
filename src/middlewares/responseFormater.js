const responseFormatter = (req, res, next) => {
    
    res.success = (statusCode, message, object) => {
        res.status(statusCode).json({
            data: object, 
            message: message,
            status: 'success',
            statusCode: statusCode,
        });
    }

    res.error = (statusCode, message, object) => {
        res.status(statusCode).json({
            error: object, 
            message: message,
            status: 'failed',
            statusCode: statusCode,
        });
    };
    
    next();
};

module.exports = responseFormatter;