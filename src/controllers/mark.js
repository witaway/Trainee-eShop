const MarkService = require('../services/mark')

class MarkController {
    
	static async get(req, res) {
        const result = await MarkService.getMark(req.body.user_id, req.body.product_id); 
        res.status(200).json(result);
	}

	static async set(req, res) {
        const result = await MarkService.setMark(req.body.user_id, req.body.product_id, req.body.value);
        res.status(200).json(result);
	}

	static async delete(req, res) {
        const result = await MarkService.deleteProduct(req.body.user_id, req.body.product_id);
        res.status(200).json(result);
	}

    static async getAverage(req, res) {
        const result = await MarkService.getProductMarksAverage(req.body.product_id);
        res.status(200).json(result);
    }

    static async getAll(req, res) {
        const result = await MarkService.getAllProductMarks(req.body.product_id);
        res.status(200).json(result);
    }
}

module.exports = MarkController