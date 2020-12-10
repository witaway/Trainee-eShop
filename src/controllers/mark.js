const MarkRepository = require('../repositories/mark')

class MarkController {
    
	static async get(req, res) {
        res
            .status(200)
            .json(await MarkRepository.getMark(req.body));
	}

	static async set(req, res) {
        res
            .status(200)
            .json(await MarkRepository.setMark(req.body));
	}

	static async delete(req, res) {
        res
            .status(200)
            .json(await MarkRepository.deleteProduct(req.body));
	}

    static async getAverage(req, res) {
        res
            .status(200)
            .json(await MarkRepository.getProductMarksAverage(req.body));
    }

    static async getAll(req, res) {
        res
            .status(200)
            .json(await MarkRepository.getAllProductMarks(req.body));
    }
}

module.exports = MarkController