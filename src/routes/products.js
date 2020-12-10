const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/product');
const MarkRouter = require('./marks')

const tryCatch = require('../helpers/tryCatch');

router.post('/create',   tryCatch(ProductController.create))
router.get('/get',       tryCatch(ProductController.get))
router.get('/list',      tryCatch(ProductController.getAll))
router.put('/edit',      tryCatch(ProductController.edit))
router.delete('/delete', tryCatch(ProductController.delete))

router.use('/mark', MarkRouter)

module.exports = router