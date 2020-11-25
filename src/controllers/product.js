const ProductRepository = require('../repositories/product')

class ProductController {
    
    static async create(req, res) {
        try {
            return res
                .status(201)
                .json(await ProductRepository.createProduct(req.body));
		} catch (error) {
            return res
                .status(404)
                .json(error);
		}
	}

	static async get(req, res) {
		try {
            return res
                .status(200)
                .json(await ProductRepository.getProduct(req.body));
		} catch (error) {
            return res
                .status(404)
                .json(error);
		}
	}

	static async getAll(req, res) {
        try {
            return res
                .status(200)
                .json(await ProductRepository.getAllProducts());
		} catch (error) {
            return res
                .status(404)
                .json(error);
		}
	}

	static async edit(req, res) {
		try {
            return res
                .status(200)
                .json(await ProductRepository.editProduct(req.body));
		} catch (error) {
            return res
                .status(404)
                .json(error);
        }
	}

	static async delete(req, res) {
        try {
            return res
                .status(200)
                .json(await ProductRepository.deleteProduct(req.body));
		} catch (error) {
            return res
                .status(404)
                .json(error);
        }
    }
}

module.exports = ProductController