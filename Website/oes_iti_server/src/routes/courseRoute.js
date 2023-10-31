'use strict';

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/', courseController.getCourses);
router.get('/:id', courseController.getCourseById);
router.get('/topics/:id', courseController.getCoursesByTopicId);
router.get('/insts/:id', courseController.getCoursesByInstId);
router.get('/stds/:id', courseController.getCoursesByStdId);
router.get('/evaluations/:id',
    courseController.getCoursesEvaluationsByStdId);
router.post('/evaluate', courseController.addCourseEvaluation);

module.exports = {
    routes: router
}