const express = require('express');
const controllerUserGroup = require('../controller/userGroupController');

const router = express.Router();
router.get('/api/usersGroup/getAllUserGroup', controllerUserGroup.getAllUserGroup);
//router.post('api/addNewUsersGroup', controllerUserGroup.addNewUserGroup);
//router.put('/api/updateUserGroupDetails', controllerUserGroup.updateUserGroupDetails);
//router.delete('/api/deleteUserGroup', controllerUserGroup.deleteUserGroup);

module.exports = router;