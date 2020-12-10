// tryCatch wrapper for controllers  
module.exports = function tryCatch(func) {
    return function(req, res) {
        try {
            return func(req, res)
        } catch (error) {
            return res.status(404).json(error)
        }
    }
}