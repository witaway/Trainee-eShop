const Product = require('../models/products/product')
const { Op, Sequelize } = require("sequelize");

class ProductRepository {

    static async createProduct(productObject) {
        return Product.create({ 
            'name':        productObject.name,
            'description': productObject.description,
            'imageUrl':    productObject.imageUrl || null,
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

    static async getListOfProducts(options) {
        
        // LIKE THIS:
        // {
        //     "sort_by": "none/name"/"date_of_update"/"cost",
        //     "order": "asc"/"desc",
        //     "only_with_pictures": true,
        //     count: 12,
        //     offset: 10
        // }
        
        const settings = {
            attributes: ['id', 'name', 'description', 'imageUrl', 'cost', 'quantity'],
            order: [ [Sequelize.col('product.quantity'), Sequelize.literal(' = 0 ASC')] ]
        }
        
        if(options.sortBy && options.order && options.sortBy !== 'none') {
            if(options.sortBy == 'date_of_update') options.sortBy = 'updatedAt'
            settings.order.push(
                [options.sortBy, options.order.toUpperCase()]
            )
        }

        if(options.onlyWithPictures === true) {
            settings.where = {
                imageUrl: {
                    [Op.not]: null
                }
            }
        }

        if(options.count || options.count === 0) {
            settings.limit = options.count
        }

        if(options.offset || options.offset === 0) {
            settings.offset = options.offset
        }

        return Product.findAll(settings);
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
            'imageUrl':    productObject.imageUrl || null,
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
