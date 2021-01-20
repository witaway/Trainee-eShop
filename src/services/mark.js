const { values } = require('sequelize/types/lib/operators')

const MarkRepository = require('../repositories/mark')
const ProductRepository = require('../repositories/product')
const UserRepository = require('../repositories/user')


const RequestHandlingError = require('../helpers/error')
const Product = require('../models/products/product')

class MarkService {

    static async getMark(userId, productID) {
        
        const product = ProductRepository.getProduct(productID)
        const user = UserRepository.getUser(userId)

        if(!product) throw new RequestHandlingError(404, 'Product not found!')
        if(!user) throw new RequestHandlingError(404, 'User not found!')

        const mark = MarkRepository.getMark(userId, productID)
        return mark
    }

    static async setMark(userId, productID, value) {

        const product = ProductRepository.getProduct(productID)
        const user = UserRepository.getUser(userId)

        if(!product) throw new RequestHandlingError(404, 'Product not found!')
        if(!user) throw new RequestHandlingError(404, 'User not found!')

        const mark = MarkRepository.setMark(userId, productID, value)
        return mark
    }

    static async deleteMark(userId, productID) {

        const mark = await MarkRepository.findOne({
            where: {
                userId:    userId,
                productId: productID
            }
        })

        if(!mark) throw new RequestHandlingError(404, 'No such mark!')

        const deletedMark = MarkRepository.deleteMark(userId, productID)
        return deletedMark
    }

    static async getAllProductMarks(productID) {
        
        const product = ProductRepository.getProduct(productID)
        if(!product) throw new RequestHandlingError(404, 'Product not found!')

        const marks = MarkRepository.getAllProductMarks(productID)
        return marks
    }

    static async getProductMarksAverage(productID) {

        const product = ProductRepository.getProduct(productID)
        if(!product) throw new RequestHandlingError(404, 'Product not found!')

        const average = MarkRepository.getProductMarksAverage(productID)
        return average
    }

}

module.exports = MarkService