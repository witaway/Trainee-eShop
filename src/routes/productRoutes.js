const Router = require('express').Router;
const router = Router();

const ProductController = require('../controllers/productController');
const MarkRouter = require('./markRoutes');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/productSchemas');

router.use('/:id/mark/', MarkRouter);

router.get('/', validator(schemas.getList), ProductController.getList);
router.get('/:id', validator(schemas.getByID), ProductController.getByID);
router.delete(
    '/:id',
    validator(schemas.deleteByID),
    ProductController.deleteByID,
);
router.post('/', validator(schemas.create), ProductController.create);
router.put('/:id', validator(schemas.editByID), ProductController.editByID);

module.exports = router;
