const ProductService = require('../services/product')

class ProductController {

    static async create(req, res) {
        const result = await ProductService.createProduct({
            name:        req.body.name,      
            description: req.body.description,  
            imageUrl:    req.body.imageUrl,
            cost:        req.body.cost,
            quantity:    req.body.quantity
        });
        res.status(200).json(result);
    }

    static async get(req, res) {
        const result = await ProductService.getProduct(req.body.id);
        res.status(200).json(result);
    }

    static async getAll(req, res) {
        const result = await ProductService.getAllProducts();
        res.status(200).json(result);
    }

    static async edit(req, res) {
        const result = await ProductService.editProduct(req.body.id, {
            name:        req.body.name,      
            description: req.body.description,  
            imageUrl:    req.body.imageUrl,
            cost:        req.body.cost,
            quantity:    req.body.quantity
        });
        res.status(200).json(result);
    }

    static async delete(req, res) {
        const result = await ProductService.deleteProduct(req.body.id);
        res.status(200).json(result);
    }
}

module.exports = ProductController