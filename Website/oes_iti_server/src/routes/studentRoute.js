'use strict';

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getStudents);
router.get('/:id', studentController.getStudentById);
router.get('/courses/:id', studentController.getStudentsByCourseId);
router.get('/insts/:id', studentController.getStudentsByInstructorId);
router.get('/deps/:id', studentController.getStudentsByInstructorId);

module.exports =  {
    routes: router
}