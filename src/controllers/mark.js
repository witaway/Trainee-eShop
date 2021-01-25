const MarkService = require('../services/mark')

class MarkController {
    
	static async get(req, res) {
        const result = await MarkService.getMark(req.user, req.body.product_id); 
        res.success(200, 'Mark is got successfully', result)
    }

	static async set(req, res) {
        const result = await MarkService.setMark(req.user, req.body.product_id, req.body.value);
        res.success(200, 'Mark is set successfully', result)
	}

	static async delete(req, res) {
        const result = await MarkService.deleteProduct(req.user, req.body.product_id);
        res.success(200, 'Mark is deleted successfully', result)
	}

    //There's no universal formatting because it's debugging method
    static async getAverage(req, res) {
        const result = await MarkService.getProductMarksAverage(req.body.product_id);
        res.status(200).json(result);
    }

    //There's no universal formatting because it's debugging method
    static async getAll(req, res) {
        const result = await MarkService.getAllProductMarks(req.body.product_id);
        res.status(200).json(result);
    }
}

module.exports = MarkController