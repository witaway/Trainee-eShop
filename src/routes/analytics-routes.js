const Router = require('express').Router;
const router = Router();

const AnalyticsController = require('../controllers/analytics-controller');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/analytics-schemas');

router.get(
    '/getProduct/:year/:month',
    validator(schemas.getProduct),
    AnalyticsController.getProduct,
);
router.get('/getUser', validator(schemas.getUser), AnalyticsController.getUser);

module.exports = router;
