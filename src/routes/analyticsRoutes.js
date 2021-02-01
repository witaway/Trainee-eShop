const Router = require("express").Router;
const router = Router();

const AnalyticsController = require('../controllers/analyticsController');

const validator =  require('../middlewares/validator');
const schemas = require('../schemas/analyticsSchemas');

router.get('/getProduct/:year/:month', validator(schemas.getProduct), AnalyticsController.getProduct);
router.get('/getUser',                 validator(schemas.getUser),    AnalyticsController.getUser);

module.exports = router;