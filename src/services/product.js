const ProductController = require('../controllers/product')

class ProductService {

    static async createProduct(body) {
        const createdProduct = ProductController.createProduct(body)
        return createdProduct
    }

    static async getProduct(body) {
        const product = ProductController.getProduct(body) 
        return product
    }

    static async getAllProducts(body) {
        const products = ProductController.getAllProducts(body)
        return products
    }

    static async editProduct(body) {
        const newProduct = ProductController.editProduct(body)
        return newProduct
    }

    static async deleteProduct(body) {
        const deletedProduct = ProductController.deleteProduct(body)
        return deletedProduct
    }

}

module.exports = ProductService