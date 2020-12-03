const Router = require("express").Router;
const router = Router();

const MarkController = require('../controllers/mark')

router.get('/get',   MarkController.get);
router.get('/getAverage', MarkController.getAverage);
router.get('/getAll', MarkController.getAll);
router.post('/set',    MarkController.set);
router.delete('/delete', MarkController.delete);

module.exports = router