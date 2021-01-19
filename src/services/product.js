const ProductRepository = require('../repositories/product')

class ProductService {

    static async createProduct(productObject) {
        const createdProduct = ProductRepository.createProduct(productObject)
        return createdProduct
    }

    static async getProduct(id) {
        const product = ProductRepository.getProduct(id) 
        return product
    }

    static async getAllProducts() {
        const products = ProductRepository.getAllProducts()
        return products
    }

    static async editProduct(id, productObject) {
        const newProduct = ProductRepository.editProduct(id, productObject)
        return newProduct
    }

    static async deleteProduct(id) {
        const deletedProduct = ProductRepository.deleteProduct(id)
        return deletedProduct
    }

}

module.exports = ProductService