const MarkRepository = require('../repositories/mark-repository');
const ProductRepository = require('../repositories/product-repository');
const UserRepository = require('../repositories/user-repository');

const { NotFoundException } = require('../classes/errors/4xx');

class MarkService {
    static async getMark(userId, productID) {
        const product = await ProductRepository.getProduct(productID);
        const user = await UserRepository.getByID(userId);

        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        if (!user) {
            throw new NotFoundException('User is not found');
        }

        return MarkRepository.getMark(userId, productID);
    }

    static async setMark(userId, productID, value) {
        const product = await ProductRepository.getProduct(productID);
        const user = await UserRepository.getByID(userId);

        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        if (!user) {
            throw new NotFoundException('User is not found');
        }

        return MarkRepository.setMark(userId, productID, value);
    }

    static async deleteMark(userId, productID) {
        const mark = await MarkRepository.findOne({
            where: {
                userId: userId,
                productId: productID,
            },
        });

        if (!mark) {
            throw new NotFoundException('Mark is not found');
        }

        await MarkRepository.deleteMark(userId, productID);
    }

    static async getAllProductMarks(productID) {
        const product = await ProductRepository.getProduct(productID);
        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        return MarkRepository.getAllProductMarks(productID);
    }

    static async getProductMarksAverage(productID) {
        const product = await ProductRepository.getProduct(productID);
        if (!product) {
            throw new NotFoundException('Product is not found');
        }
        return MarkRepository.getProductMarksAverage(productID);
    }
}

module.exports = MarkService;
