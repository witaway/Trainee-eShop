const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/product');
const MarkRouter = require('./marks')

const passport = require("passport");
const tryCatch = require('../helpers/tryCatch');
const validator =  require('../helpers/validator')

const ProductSchemas = require('../validationSchemas/products')

// NOT REST
//router.post('/create',   validator(ProductSchemas.create),      tryCatch(ProductController.create))
//router.get('/get',       validator(ProductSchemas.getByID),     tryCatch(ProductController.getByID))
//router.get('/list',      validator(ProductSchemas.getAll),      tryCatch(ProductController.getAll))
//router.get('/list',      validator(ProductSchemas.getWithList), tryCatch(ProductController.getWithList))
//router.put('/edit',      validator(ProductSchemas.edit),        tryCatch(ProductController.edit))
//router.delete('/delete', validator(ProductSchemas.delete),      tryCatch(ProductController.delete))

// REST

router.use(passport.authenticate("jwt", { session: false }));

router.get('/',          validator(ProductSchemas.getWithList),   tryCatch(ProductController.getWithList))
router.get('/:id',       validator(ProductSchemas.getByID),       tryCatch(ProductController.getByID))
router.delete('/:id',    validator(ProductSchemas.deleteByID),    tryCatch(ProductController.deleteByID))
router.post('/',         validator(ProductSchemas.create),        tryCatch(ProductController.create))
router.put('/:id',       validator(ProductSchemas.editByID),      tryCatch(ProductController.editByID))


router.use('/mark', MarkRouter)

module.exports = router