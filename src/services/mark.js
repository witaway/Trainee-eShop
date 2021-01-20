const MarkRepository = require('../repositories/mark')
const ProductRepository = require('../repositories/product')
const UserRepository = require('../repositories/user')

const RequestHandlingError = require('../helpers/error')

class MarkService {

    static async getMark(userId, productID) {
        
        const product = await ProductRepository.getProduct(productID)
        const user = await UserRepository.getUser(userId)

        if(!product) throw new RequestHandlingError(404, 'Product not found!')
        if(!user) throw new RequestHandlingError(404, 'User not found!')

        const mark = MarkRepository.getMark(userId, productID)
        return mark
    }

    static async setMark(userId, productID, value) {

        const product = await ProductRepository.getProduct(productID)
        const user    = await UserRepository.getUser(userId)

        if(!product) throw new RequestHandlingError(404, 'Product not found!')
        if(!user) throw new RequestHandlingError(404, 'User not found!')

        const mark = await MarkRepository.setMark(userId, productID, value)
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

        const deletedMark = await MarkRepository.deleteMark(userId, productID)
        return deletedMark
    }

    static async getAllProductMarks(productID) {
        
        const product = await ProductRepository.getProduct(productID)
        if(!product) throw new RequestHandlingError(404, 'Product not found!')

        const marks = await MarkRepository.getAllProductMarks(productID)
        return marks
    }

    static async getProductMarksAverage(productID) {

        const product = await ProductRepository.getProduct(productID)
        if(!product) throw new RequestHandlingError(404, 'Product not found!')

        const average = await MarkRepository.getProductMarksAverage(productID)
        return average
    }

}

module.exports = MarkService