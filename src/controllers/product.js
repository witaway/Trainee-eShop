const ProductRepository = require('../repositories/product')

class ProductController {

    static async create(req, res) {
        res
            .status(201)
            .json(await ProductRepository.createProduct(req.body));
    }

    static async get(req, res) {
        res
            .status(200)
            .json(await ProductRepository.getProduct(req.body));
    }

    static async getAll(req, res) {
        res
            .status(200)
            .json(await ProductRepository.getAllProducts());
    }

    static async edit(req, res) {
        res
            .status(200)
            .json(await ProductRepository.editProduct(req.body));
    }

    static async delete(req, res) {
        res
            .status(200)
            .json(await ProductRepository.deleteProduct(req.body));
    }
}

module.exports = ProductController