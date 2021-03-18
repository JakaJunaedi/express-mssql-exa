const express = require('express');
const controller = require('../controller/userController');

const router = express.Router();
router.get('/api/users/getAllData', controller.getAllData);
router.post('/api/users/addNewData', controller.addNewData);
router.put('api/users/updateData', controller.updateData);
router.delete('/api/users/deleteData', controller.deleteData);

module.exports = router;