const Router = require('express').Router;
const router = Router();

const ProductController = require('../controllers/product-controller');
const MarkRouter = require('./mark-routes');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/product-schemas');

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
