'use strict';

const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');

router.get('/', examController.getExams);
router.get('/:id', examController.getExamById);
router.get('/result/:examId/:stdId', examController.getExamResult);
router.get('/crs/:id', examController.getExamsByCourseId);
router.get('/stds/:id', examController.getExamsByStdId);
router.get('/stds/:stdId/:crsId', examController.getStudentExamsByCourseId);
router.post('/submit', examController.answerAndCorrectExam);

module.exports = {
    routes: router
}