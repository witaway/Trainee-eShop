const ProductsMarks = require('../models/products/products-marks');
const sequelize = require('../sequelize').sequelize;

class MarkRepository {
    static async setMark(userId, productID, value) {
        const mark = await ProductsMarks.findOne({
            where: {
                userId: userId,
                productId: productID,
            },
        });
        if (mark == null) {
            return ProductsMarks.create({
                userId: userId,
                productId: productID,
                mark: value,
            });
        } else {
            return mark.update({
                mark: value,
            });
        }
    }

    static async getMark(userId, productID) {
        return ProductsMarks.findOne({
            where: {
                userId: userId,
                productId: productID,
            },
        });
    }

    static async deleteMark(userId, productID) {
        const mark = await ProductsMarks.findOne({
            where: {
                userId: userId,
                productId: productID,
            },
        });
        await mark.destroy();
    }

    static async getAllProductMarks(productID) {
        return ProductsMarks.findAll({
            attributes: [['id', 'markId'], 'mark', 'userId', 'productId'],
            where: {
                productId: productID,
            },
        });
    }

    static async getProductMarksAverage(productID) {
        const marksSummary = await ProductsMarks.findOne({
            attributes: [
                [
                    sequelize.cast(
                        sequelize.fn('AVG', sequelize.col('mark')),
                        'DECIMAL(12, 2)',
                    ),
                    'avg',
                ],
            ],
            where: {
                productId: productID,
            },
            raw: true,
        });
        return marksSummary.avg;
    }
}

module.exports = MarkRepository;
