const MarkRepository = require('../repositories/mark')

class MarkController {
    
	static async get(req, res) {
		try {
            return res
                .status(200)
                .json(await MarkRepository.getMark(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
		}
	}

	static async set(req, res) {
		try {
            return res
                .status(200)
                .json(await MarkRepository.setMark(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
        }
	}

	static async delete(req, res) {
        try {
            return res
                .status(200)
                .json(await MarkRepository.deleteProduct(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
        }
    }

    static async getAverage(req, res) {
        try {
            return res
                .status(200)
                .json(await MarkRepository.getProductMarksAverage(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
        }
    }

    static async getAll(req, res) {
        try {
            return res
                .status(200)
                .json(await MarkRepository.getAllProductMarks(req.body));
		} catch (error) {
            return res
                .status(404)
                .json({'error': error.toString()})
        }
    }
}

module.exports = MarkController