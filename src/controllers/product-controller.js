const ProductService = require('../services/product-service');

const ResponseFormat = require('../helpers/response-format');

class ProductController {
    static async create(req, res) {
        const result = await ProductService.createProduct({
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.image,
            cost: req.body.cost,
            quantity: req.body.quantity,
        });
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Product is created successfully',
                result,
            ),
        );
    }

    static async getByID(req, res) {
        const result = await ProductService.getProduct(req.params.id);
        res.status(200).json(
            ResponseFormat.success(200, 'Product is got successfully', result),
        );
    }

    static async getList(req, res) {
        const result = await ProductService.getListOfProducts({
            sortBy: req.body.sort_by,
            order: req.body.order,
            onlyWithPictures: req.body.only_with_pictures,
            count: req.body.count,
            offset: req.body.offset,
        });
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Products are got successfully',
                result,
            ),
        );
    }

    //Debug method
    static async getAll(req, res) {
        const result = await ProductService.getAllProducts();
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Products are got successfully',
                result,
            ),
        );
    }

    static async editByID(req, res) {
        const result = await ProductService.editProduct(req.params.id, {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.image,
            cost: req.body.cost,
            quantity: req.body.quantity,
        });
        res.status(200).json(
            ResponseFormat.success(
                200,
                'Products is edited successfully',
                result,
            ),
        );
    }

    static async deleteByID(req, res) {
        await ProductService.deleteProduct(req.params.id);
        res.status(200).json(
            ResponseFormat.success(200, 'Products is deleted successfully', {}),
        );
    }
}

module.exports = ProductController;
