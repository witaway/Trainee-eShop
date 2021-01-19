const MarkService = require('../services/mark')

class MarkController {
    
	static async get(req, res) {
        const result = await MarkService.getMark(req.body); 
        res.status(200).json(result);
	}

	static async set(req, res) {
        const result = await MarkService.setMark(req.body);
        res.status(200).json(result);
	}

	static async delete(req, res) {
        const result = await MarkService.deleteProduct(req.body);
        res.status(200).json(result);
	}

    static async getAverage(req, res) {
        const result = await MarkService.getProductMarksAverage(req.body);
        res.status(200).json(result);
    }

    static async getAll(req, res) {
        const result = await MarkService.getAllProductMarks(req.body);
        res.status(200).json(result);
    }
}

module.exports = MarkController