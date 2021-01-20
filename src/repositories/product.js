const Product = require('../models/products/product')
const ProductsMarks = require('../models/products/productsMarks')

const sequelize = require('../loaders/database')
const { Op, Sequelize, DataTypes } = require("sequelize");

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
            attributes: ['id', 'name', 'description', 'imageUrl', 'cost', 'quantity', 
            [sequelize.cast(sequelize.fn('AVG', sequelize.col('productsMarks.mark')), 'DECIMAL(12, 2)'), 'avg']], //cast for .00 precision
            // Zeros at the bottom
            order: [ [Sequelize.col('product.quantity'), Sequelize.literal(' = 0 ASC')] ],
            include: {
                model: ProductsMarks,
                //Attribute avg moved to outer attributes because i don't need prefix tablename
                //And if I ask some column in include it WILL add prefix tablename!
                attributes: [],
                where: {
                    productId: sequelize.col('product.id')
                },
                required: false
            },
            group: [ sequelize.col('product.id') ],
            // https://stackoverflow.com/questions/43729254/sequelize-limit-and-offset-incorrect-placement-in-query
            // Without it LIMIT places incorrectly in subquery, but i need this just in the end.
            subQuery: false,
            raw: true
        }
        
        if(options.onlyWithPictures === true) {
            settings.where = {
                imageUrl: {
                    [Op.not]: null
                }
            }
        }

        if(options.sortBy && options.order && options.sortBy !== 'none') {
            if(options.sortBy === 'date_of_update') options.sortBy = 'updatedAt'
            settings.order.push([options.sortBy, options.order])
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
