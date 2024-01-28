const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.get('/test', userController.getTest);

module.exports = router;