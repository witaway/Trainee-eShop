const ProductRepository = require('../repositories/productRepository');
const { NotFoundException } = require('../classes/errors/4xx');

class ProductService {
    static async createProduct(productObject) {
        return ProductRepository.createProduct(productObject);
    }

    static async getProduct(id) {
        const product = await ProductRepository.getProduct(id);
        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        return product;
    }

    static async getListOfProducts(options) {
        return ProductRepository.getListOfProducts(options);
    }

    static async getAllProducts() {
        const products = await ProductRepository.getAllProducts();
        if (!products) {
            throw new NotFoundException('Product is not found');
        }
        return products;
    }

    static async editProduct(id, productObject) {
        const product = await ProductRepository.getProduct(id);
        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        return ProductRepository.editProduct(id, productObject);
    }

    static async deleteProduct(id) {
        const product = await ProductRepository.getProduct(id);
        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        await ProductRepository.deleteProduct(id);
    }
}

module.exports = ProductService;
