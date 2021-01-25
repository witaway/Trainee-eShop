const MarkRepository = require('../repositories/mark')
const ProductRepository = require('../repositories/product')
const UserRepository = require('../repositories/user')

const { NotFound } = require('../classes/errors')

class MarkService {

    static async getMark(userId, productID) {
        
        const product = await ProductRepository.getProduct(productID)
        const user    = await UserRepository.getByID(userId)

        if(!product) throw new NotFound('Product is not found')
        if(!user)    throw new NotFound('User is not found')

        const mark = MarkRepository.getMark(userId, productID)
        return mark
    }

    static async setMark(userId, productID, value) {

        const product = await ProductRepository.getProduct(productID)
        const user    = await UserRepository.getByID(userId)

        if(!product) throw new NotFound('Product is not found')
        if(!user)    throw new NotFound('User is not found')

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

        if(!mark) throw new NotFound('Mark is not found')

        const deletedMark = await MarkRepository.deleteMark(userId, productID)
        return deletedMark
    }

    static async getAllProductMarks(productID) {
        
        const product = await ProductRepository.getProduct(productID)
        if(!product) throw new NotFound('Product is not found')

        const marks = await MarkRepository.getAllProductMarks(productID)
        return marks
    }

    static async getProductMarksAverage(productID) {

        const product = await ProductRepository.getProduct(productID)
        if(!product) throw new NotFound('Product is not found')

        const average = await MarkRepository.getProductMarksAverage(productID)
        return average
    }

}

module.exports = MarkService