const sequelize = require("../sequelize").sequelize;
const QueryTypes = require("sequelize").QueryTypes;

const { NotFoundException } = require('../classes/errors/4xx')
const ResponseFormat = require('../helpers/responseFormat');

class AnalyticsController {

    static async getProduct(req, res) {

        const year = req.params.year;
        const month = req.params.month;

        const result = await sequelize.query(`
            SELECT pm1.productId as \`id\`, pr.name as \`name\`, pr.description as \`description\`, pr.image_url as \`imageUrl\`,
                   pr.cost as \`cost\`, pr.quantity as \`quantity\`, pr.updatedAt as \`updatedAt\`, 
                   (SELECT CAST(AVG(pm2.mark) AS DECIMAL(12, 2)) FROM products_marks as pm2 WHERE pm2.productId = pr.id) as \`avg\`, 
                   count(pm1.mark) as \`cnt\`

            FROM products_marks as pm1

            INNER JOIN products as pr
            ON pm1.productId = pr.id

            WHERE MONTH(pm1.updatedAt) = ${month} AND YEAR(pm1.updatedAt) = ${year}
            GROUP BY pm1.productId
            ORDER BY \`cnt\` DESC
            LIMIT 1;
        `, {
            type: QueryTypes.SELECT,
            raw: true
        });

        if(result.length === 0) {
            throw new NotFoundException('There is no product like you need. Maybe there is no marks in month?');
        }

        const product = {
            id:          result[0].id,
            name:        result[0].name,
            description: result[0].description,
            imageUrl:    result[0].imageUrl,
            cost:        result[0].cost,
            quantity:    result[0].quantity,
            updatedAt:   result[0].updatedAt,
            avg:         result[0].avg
        };

        const countOfMarks = result[0].cnt;
        
        res.status(200).json(ResponseFormat.success(200, 'Analytics info is got successfully', {
            'product': product,
            'count of marks in month': countOfMarks
        }));
    }

    static async getUser(req, res) {

        const result = await sequelize.query(`
            SELECT pm_a.userId, users.email as \`email\`, users.username as \`username\`, count(pm_a.mark) as \`cnt\`
            FROM products_marks as pm_a
            INNER JOIN users
                ON pm_a.userId = users.id
            WHERE pm_a.mark < (
                SELECT avg(pm_b.mark)
                FROM products_marks as pm_b
            )
            group by pm_a.userId
            order by \`cnt\` DESC
            LIMIT 1;
        `, {
            type: QueryTypes.SELECT,
            raw: true
        });

        if(result.length === 0) {
            throw NotFoundException('There is no user like you need. Maybe there is no marks in database?');
        }

        const user = {
            id:       result[0].userId,
            email:    result[0].email,
            username: result[0].username
        }

        const countOfBadMarks = result[0].cnt;

        res.status(200).json(ResponseFormat.success(200, 'Analytics info is got successfully', {
            'user': user,
            'count of bad marks': countOfBadMarks
        }));
    }

}

module.exports = AnalyticsController;