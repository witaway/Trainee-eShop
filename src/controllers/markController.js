const MarkService = require('../services/markService');

const ResponseFormat = require('../helpers/responseFormat');

class MarkController {
    
	static async get(req, res) {
        const result = await MarkService.getMark(req.user, req.params.id);    
        res.status(200).json(ResponseFormat.success(
            200, 'Mark is got successfully', result
        )); 
    }

	static async set(req, res) {
        const result = await MarkService.setMark(req.user, req.params.id, req.body.value);
        res.status(200).json(ResponseFormat.success(
            200, 'Mark is set successfully', result
        )); 
	}

	static async delete(req, res) {
        await MarkService.deleteProduct(req.user, req.params.id);
        res.status(200).json(ResponseFormat.success(
            200, 'Mark is deleted successfully', {}
        )); 
    }

    //There's no universal formatting because it's debugging method
    static async getAverage(req, res) {
        const result = await MarkService.getProductMarksAverage(req.params.id);
        res.status(200).json(result);
    }

    //There's no universal formatting because it's debugging method
    static async getAll(req, res) {
        const result = await MarkService.getAllProductMarks(req.params.id);
        res.status(200).json(result);
    }
}

module.exports = MarkController;