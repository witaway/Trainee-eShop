const Router = require("express").Router;
const router = Router();

const MarkController = require('../controllers/mark')

const tryCatch = require('../helpers/tryCatch');
const validator =  require('../helpers/validator')

const MarksSchemas = require('../validationSchemas/marks')


router.get('/get',        validator(MarksSchemas.get),    tryCatch(MarkController.get));
router.post('/set',       validator(MarksSchemas.set),    tryCatch(MarkController.set));
router.delete('/delete',  validator(MarksSchemas.delete), tryCatch(MarkController.delete));

//These will be deleted
router.get('/getAverage', validator(MarksSchemas.getAverage), tryCatch(MarkController.getAverage));
router.get('/getAll',     validator(MarksSchemas.getAll),     tryCatch(MarkController.getAll));

module.exports = router