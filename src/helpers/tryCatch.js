// tryCatch wrapper for controllers  
module.exports = function tryCatch(func) {
    return async function(req, res) {
        const p = func(req, res) // func is async!
        p.catch((error) => {
            res.status(404).json(error)
        })
    }
}