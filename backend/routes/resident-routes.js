const express = require('express');
const residentController = require('../controller/resident-controller');
const router = express.Router();

router.get('/',residentController.getResidents)

module.exports = router;