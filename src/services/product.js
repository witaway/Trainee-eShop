const ProductRepository = require('../repositories/product')
const { NotFoundException } = require('../classes/errors/4xx')

class ProductService {

    static async createProduct(productObject) {
        const createdProduct = await ProductRepository.createProduct(productObject)
        return createdProduct
    }

    static async getProduct(id) {
        const product = await ProductRepository.getProduct(id) 
        if(!product) throw new NotFoundException("Product is not found")
        return product
    }

    static async getListOfProducts(options) {
        const products = await ProductRepository.getListOfProducts(options)
        if(!products) throw new NotFoundException("Product is not found")
        return products
    }

    static async getAllProducts() {
        const products = await ProductRepository.getAllProducts()
        if(!products) throw new NotFoundException("Product is not found")
        return products
    }

    static async editProduct(id, productObject) {
        const product = await ProductRepository.getProduct(id) 
        if(!product) throw new NotFoundException("Product is not found")
        const newProduct = await ProductRepository.editProduct(id, productObject)
        return newProduct
    }

    static async deleteProduct(id) {
        const product = await ProductRepository.getProduct(id) 
        if(!product) throw new NotFoundException("Product is not found")
        const deletedProduct = await ProductRepository.deleteProduct(id)
        return deletedProduct
    }

}

module.exports = ProductService