const Product       = require('../models/products/product')
const User          = require('../models/users/user')
const ProductsMarks = require('../models/products/productsMarks')
const sequelize = require('../loaders/database')

class MarkRepository {

    static async setMark(userId, productID, value) {
        const mark = await ProductsMarks.findOne({
            where: {
                userId:    userId,
                productId: productID
            }
        })
        if(mark == null) {
            return ProductsMarks.create({ 
                userId:     userId,
                productId:  productID,
                mark:       value
            })
        } else {
            return mark.update({
                mark: value    
            })
        }
    }


    static async getMark(userId, productID) {
        const mark = await ProductsMarks.findOne({
            where: {
                userId:    userId,
                productId: productID
            }
        })
        return mark
    }

    static async deleteMark(userId, productID) {
        const mark = await ProductsMarks.findOne({
            where: {
                userId:    userId,
                productId: productID
            }
        })
        return mark.destroy();
    }

    static async getAllProductMarks(productID) {
        return ProductsMarks.findAll({
            where: {
                productId: productID
            }
        });
    }

    static async getProductMarksAverage(productID) {
        const marksSummary = await ProductsMarks.findOne({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('mark')), 'sum'],
                [sequelize.fn('COUNT', sequelize.col('mark')), 'quantity']
            ],
            where: {
                productId: productID
            },
            raw: true
        });
        
        if(marksSummary.quantity === 0) {
            return { 'error': 'no marks on product' }
        } else {
            return { 'result': marksSummary.sum / marksSummary.quantity }
        }
    }
}

module.exports = MarkRepository
