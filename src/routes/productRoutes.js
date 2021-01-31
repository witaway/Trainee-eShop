const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/productController');
const MarkRouter = require('./markRoutes');

const validator =  require('../middlewares/validator');
const ProductSchemas = require('../schemas/productSchemas');

router.use('/:id/mark/', MarkRouter);

router.get('/',          validator(ProductSchemas.getWithList),   ProductController.getList);
router.get('/:id',       validator(ProductSchemas.getByID),       ProductController.getByID);
router.delete('/:id',    validator(ProductSchemas.deleteByID),    ProductController.deleteByID);
router.post('/',         validator(ProductSchemas.create),        ProductController.create);
router.put('/:id',       validator(ProductSchemas.editByID),      ProductController.editByID);

module.exports = router;