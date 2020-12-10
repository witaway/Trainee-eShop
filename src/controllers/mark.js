const MarkService = require('../services/mark')

class MarkController {
    
	static async get(req, res) {
        res
            .status(200)
            .json(await MarkService.getMark(req.body));
	}

	static async set(req, res) {
        res
            .status(200)
            .json(await MarkService.setMark(req.body));
	}

	static async delete(req, res) {
        res
            .status(200)
            .json(await MarkService.deleteProduct(req.body));
	}

    static async getAverage(req, res) {
        res
            .status(200)
            .json(await MarkService.getProductMarksAverage(req.body));
    }

    static async getAll(req, res) {
        res
            .status(200)
            .json(await MarkService.getAllProductMarks(req.body));
    }
}

module.exports = MarkController