const ProductService = require('../services/product')

class ProductController {

    static async create(req, res) {
        const result = await ProductService.createProduct({
            name:        req.body.name,      
            description: req.body.description,  
            imageUrl:    req.body.image,
            cost:        req.body.cost,
            quantity:    req.body.quantity
        });
        res.status(200).json(result);
    }

    static async getByID(req, res) {
        const result = await ProductService.getProduct(req.body.id);
        res.status(200).json(result);
    }

    static async getWithList(req, res) {
        const result = await ProductService.getListOfProducts({
            sortBy:           req.body.sort_by,
            order:            req.body.order,
            onlyWithPictures: req.body.only_with_pictures,
            count:            req.body.count,
            offset:           req.body.offset
        });
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
            imageUrl:    req.body.image,
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