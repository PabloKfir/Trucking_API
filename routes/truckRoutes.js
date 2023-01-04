const express = require('express');
const truckController = require('./../controllers/truckController');
const router = express.Router();

//router.param('id', truckController.checkID)
router
    .route('/')
    .get(truckController.getAllTrucks);

router
    .route('/:id')
    .get(truckController.getTruck);

module.exports = router;