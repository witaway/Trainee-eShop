const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/product');
const MarkRouter = require('./marks')

const tryCatch = require('../helpers/tryCatch');
const validator =  require('../helpers/validator')

const ProductSchemas = require('../validationSchemas/products')

router.post('/create',   validator(ProductSchemas.create),      tryCatch(ProductController.create))
router.get('/get',       validator(ProductSchemas.getByID),     tryCatch(ProductController.getByID))
//router.get('/list',      validator(ProductSchemas.getAll),      tryCatch(ProductController.getAll))
router.get('/list',      validator(ProductSchemas.getWithList), tryCatch(ProductController.getWithList))
router.put('/edit',      validator(ProductSchemas.edit),        tryCatch(ProductController.edit))
router.delete('/delete', validator(ProductSchemas.delete),      tryCatch(ProductController.delete))

router.use('/mark', MarkRouter)

module.exports = router