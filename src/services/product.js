const ProductRepository = require('../repositories/product')
const RequestHandlingError = require('../helpers/error')

class ProductService {

    static async createProduct(productObject) {
        const createdProduct = ProductRepository.createProduct(productObject)
        return createdProduct
    }

    static async getProduct(id) {
        const product = ProductRepository.getProduct(id) 
        if(!product) throw new RequestHandlingError(404, "Product not found!")
        return product
    }

    static async getListOfProducts(options) {
        const products = ProductRepository.getListOfProducts(options)
        if(!products) throw new RequestHandlingError(404, "Product not found!")
        return products
    }

    static async getAllProducts() {
        const products = ProductRepository.getAllProducts()
        if(!products) throw new RequestHandlingError(404, "Product not found!")
        return products
    }

    static async editProduct(id, productObject) {
        const product = ProductRepository.getProduct(id) 
        if(!product) throw new RequestHandlingError(404, "Product not found!")
        const newProduct = ProductRepository.editProduct(id, productObject)
        return newProduct
    }

    static async deleteProduct(id) {
        const product = ProductRepository.getProduct(id) 
        if(!product) throw new RequestHandlingError(404, "Product not found!")
        const deletedProduct = ProductRepository.deleteProduct(id)
        return deletedProduct
    }

}

module.exports = ProductService