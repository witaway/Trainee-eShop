const Product = require('../models/products/product')

class ProductRepository {

    static async createProduct(productObject) {
        return Product.create({ 
            'name':        productObject.name,
            'description': productObject.description,
            'imageUrl':    productObject.img || null,
            'cost':        productObject.cost,
            'quantity':    productObject.quantity
        });
    }

    static async getProduct(id) {
        return Product.findOne({
            attributes: ['id', 'name', 'description', 'imageUrl', 'cost', 'quantity'],
            where: {
                id: id,
            }
        });
    }

    static async getAllProducts() {
        return Product.findAll({
            attributes: ['id', 'name', 'description', 'imageUrl', 'cost', 'quantity']
        });
    }

    static async editProduct(id, productObject) {
        const post = await Product.findByPk(id)
        return post.update({
            'name':        productObject.name,
            'description': productObject.description,
            'imageUrl':    productObject.img || null,
            'cost':        productObject.cost,
            'quantity':    productObject.quantity
        });
    }

    static async deleteProduct(id) {
        const post = await Product.findByPk(id);
        return post.destroy();
    }
}

module.exports = ProductRepository
