'use strict';

const examsData = require('../../src/data/exams');
const getExams = async (req, res, next) => {
    try {
        const exams = await examsData.getExams();
        res.send(exams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getExamById = async (req, res, next) => {
    try {
        const exam = await examsData.getExamById(req.params.id);
        res.send(exam);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getExamResult = async (req, res, next) => {
    const {examId, stdId} = req.params;
    try {
        const examResult = await examsData.getExamResult(examId, stdId);
        res.send(examResult);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getExamsByCourseId = async (req, res, next) => {
    try {
        const exams = await examsData.getExamsByCourseId(req.params.id);
        res.send(exams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getExamsByStdId = async (req, res, next) => {
    try {
        const exams = await examsData.getExamsByStdId(req.params.id);
        res.send(exams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const answerAndCorrectExam = async (req, res, next) => {
    const {answers} = req.body;
    try {
        const examResult = await examsData.answerAndCorrectExamQuestions(answers);
        res.send(examResult);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getStudentExamsByCourseId = async (req, res, next) => {
    const {stdId, crsId} = req.params;
    try {
        const exams = await examsData.getExamsInCourseByStdId(stdId, crsId);
        res.send(exams);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getExams,
    getExamById,
    getExamResult,
    getExamsByCourseId,
    getExamsByStdId,
    getStudentExamsByCourseId,
    answerAndCorrectExam
}