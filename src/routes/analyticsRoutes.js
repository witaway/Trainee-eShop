const Router = require("express").Router;
const router = Router();

const AnalyticsController = require('../controllers/analyticsController');

router.get('/getProduct/:year/:month', AnalyticsController.getProduct);
router.get('/getUser',                 AnalyticsController.getUser);

module.exports = router;