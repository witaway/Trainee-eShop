const Router = require('express').Router;
const router = Router();

const RoleController = require('../controllers/roleController');

const validator = require('../middlewares/validator');
const schemas = require('../schemas/roleSchemas');

router.post('/', validator(schemas.createRole), RoleController.createRole);
router.get(
    '/',
    validator(schemas.getListOfRoles),
    RoleController.getListOfRoles,
);

router.get('/:id', validator(schemas.getRoleByID), RoleController.getRoleByID);
router.put(
    '/:id',
    validator(schemas.editRoleByID),
    RoleController.editRoleByID,
);
router.delete(
    '/:id',
    validator(schemas.deleteRoleByID),
    RoleController.deleteRoleByID,
);

module.exports = router;
