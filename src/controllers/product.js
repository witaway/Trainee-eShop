const ProductService = require('../services/product')

class ProductController {

    static async create(req, res) {
        res
            .status(201)
            .json(await ProductService.createProduct(req.body));
    }

    static async get(req, res) {
        res
            .status(200)
            .json(await ProductService.getProduct(req.body));
    }

    static async getAll(req, res) {
        res
            .status(200)
            .json(await ProductService.getAllProducts());
    }

    static async edit(req, res) {
        res
            .status(200)
            .json(await ProductService.editProduct(req.body));
    }

    static async delete(req, res) {
        res
            .status(200)
            .json(await ProductService.deleteProduct(req.body));
    }
}

module.exports = ProductController