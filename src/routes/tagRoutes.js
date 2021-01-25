const Router = require("express").Router;
const router = Router({
    mergeParams: true
});

const MarkController = require('../controllers/markController');

const tryCatch     = require('../helpers/tryCatch');
const validator    =  require('../middlewares/validator');
const MarksSchemas = require('../schemas/markShemas');

router.get('/',        validator(MarksSchemas.get),    tryCatch(MarkController.get));
router.post('/',       validator(MarksSchemas.set),    tryCatch(MarkController.set));
router.delete('/',     validator(MarksSchemas.delete), tryCatch(MarkController.delete));

//These will be deleted
//router.get('/getAverage', validator(MarksSchemas.getAverage), tryCatch(MarkController.getAverage));
//router.get('/getAll',     validator(MarksSchemas.getAll),     tryCatch(MarkController.getAll));

module.exports = router;