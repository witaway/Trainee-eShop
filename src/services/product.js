const ProductRepository = require('../repositories/product')

class ProductService {

    static async createProduct(body) {
        const createdProduct = ProductRepository.createProduct(body)
        return createdProduct
    }

    static async getProduct(body) {
        const product = ProductRepository.getProduct(body) 
        return product
    }

    static async getAllProducts(body) {
        const products = ProductRepository.getAllProducts(body)
        return products
    }

    static async editProduct(body) {
        const newProduct = ProductRepository.editProduct(body)
        return newProduct
    }

    static async deleteProduct(body) {
        const deletedProduct = ProductRepository.deleteProduct(body)
        return deletedProduct
    }

}

module.exports = ProductService