const Router = require("express").Router;
const router = Router();

const ProductController = require('../controllers/product')

router.post('/create', ProductController.create);

router.get('/get', ProductController.get);

router.get('/getAll', ProductController.getAll);

router.put('/edit', ProductController.edit);

router.delete('/delete', ProductController.delete);

module.exports = router