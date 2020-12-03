const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/product');
const MarkRouter = require('./marks')

router.post('/create',   ProductController.create);
router.get('/get',       ProductController.get);
router.get('/list',      ProductController.getAll);
router.put('/edit',      ProductController.edit);
router.delete('/delete', ProductController.delete);

router.use('/mark', MarkRouter)

module.exports = router