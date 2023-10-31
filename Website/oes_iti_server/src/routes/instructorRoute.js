'use strict';

const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.getInstructors);
router.get('/:id', instructorController.getInstructorById);
router.get('/deps/:id', instructorController.getInstructorByDepId);

module.exports =  {
    routes: router
}