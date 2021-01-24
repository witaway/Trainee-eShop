const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/product');
const MarkRouter = require('./marks')

const passport = require("passport");
const tryCatch = require('../helpers/tryCatch');
const validator =  require('../middlewares/validator')

const ProductSchemas = require('../schemas/products')


router.use(passport.authenticate("jwt", { session: false }));

router.get('/',          validator(ProductSchemas.getWithList),   tryCatch(ProductController.getWithList))
router.get('/:id',       validator(ProductSchemas.getByID),       tryCatch(ProductController.getByID))
router.delete('/:id',    validator(ProductSchemas.deleteByID),    tryCatch(ProductController.deleteByID))
router.post('/',         validator(ProductSchemas.create),        tryCatch(ProductController.create))
router.put('/:id',       validator(ProductSchemas.editByID),      tryCatch(ProductController.editByID))


router.use('/mark', MarkRouter)

module.exports = router