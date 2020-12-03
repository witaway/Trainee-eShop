const Product = require('../models/products/product')

class ProductRepository {

    static async createProduct(body) {
        return Product.create({ 
            'name':        body.name,
            'description': body.description,
            'imageUrl':    body.img || null,
            'cost':        body.cost,
            'quantity':    body.quantity
        });
    }

    static async getProduct(body){
        return Product.findOne({
            attributes: ['id', 'name', 'description', 'imageUrl', 'cost', 'quantity'],
            where: {
                id: body.id,
            }
        });
    }

    static async getAllProducts() {
        return Product.findAll({
            attributes: ['id', 'name', 'description', 'imageUrl', 'cost', 'quantity']
        });
    }

    static async editProduct(body){
        const post = await Product.findByPk(body.id)
        return post.update({
            'name':        body.name,
            'description': body.description,
            'imageUrl':    body.img || null,
            'cost':        body.cost,
            'quantity':    body.quantity
        });
    }

    static async deleteProduct(body){
        const post = await Product.findByPk(body.id);
        return post.destroy();
    }
}

module.exports = ProductRepository
