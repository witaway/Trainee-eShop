const Product       = require('../models/products/product')
const User          = require('../models/users/user')
const ProductsMarks = require('../models/products/productsMarks')
const sequelize = require('../loaders/database')

class MarkRepository {

    static async setMark(body) {
        // body.userId, body.productId, body.mark
        const mark = await ProductsMarks.findOne({
            where: {
                userId:    body.userId,
                productId: body.productId
            }
        })
        if(mark == null) {
            return ProductsMarks.create({ 
                userId:     body.userId,
                productId:  body.productId,
                mark:       body.mark
            })
        } else {
            return mark.update({
                mark: body.mark    
            })
        }
    }


    static async getMark(body) {
        // body.userId, body.productId
        const mark = await ProductsMarks.findOne({
            where: {
                userId:    body.userId,
                productId: body.productId
            }
        })
        return mark
    }

    static async deleteMark(body) {
        // body.userId, body.productId
        const mark = await ProductsMarks.findOne({
            where: {
                userId:    body.userId,
                productId: body.productId
            }
        })
        return mark.destroy();
    }

    static async getAllProductMarks(body) {
        // body.productId
        return ProductsMarks.findAll({
            where: {
                productId: body.productId
            }
        });
    }

    static async getProductMarksAverage(body) {
        // body.productId
        const marksSummary = await ProductsMarks.findOne({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('mark')), 'sum'],
                [sequelize.fn('COUNT', sequelize.col('mark')), 'quantity']
            ],
            where: {
                productId: body.productId
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
