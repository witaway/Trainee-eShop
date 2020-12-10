const Router = require("express").Router;
const router = Router();

const MarkController = require('../controllers/mark')
const tryCatch = require('../helpers/tryCatch');

router.get('/get',        tryCatch(MarkController.get));
router.get('/getAverage', tryCatch(MarkController.getAverage));
router.get('/getAll',     tryCatch(MarkController.getAll));
router.post('/set',       tryCatch(MarkController.set));
router.delete('/delete',  tryCatch(MarkController.delete));

module.exports = router