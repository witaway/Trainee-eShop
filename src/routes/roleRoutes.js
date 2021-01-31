const Router = require("express").Router;
const router = Router();

const RoleController = require('../controllers/roleController');

router.post('/',      RoleController.createRole);
router.get('/',       RoleController.getListOfRoles);

router.get('/:id',    RoleController.getRoleByID);
router.put('/:id',    RoleController.editRoleByID);
router.delete('/:id', RoleController.deleteRoleByID);

module.exports = router;