const Router = require('express').Router;
const router = Router({
    mergeParams: true,
});

const MarkController = require('../controllers/markController');

const validator = require('../middlewares/validator');
const MarksSchemas = require('../schemas/markSchemas');

router.get('/', validator(MarksSchemas.get), MarkController.get);
router.post('/', validator(MarksSchemas.set), MarkController.set);
router.delete('/', validator(MarksSchemas.delete), MarkController.delete);

module.exports = router;
