'use strict';

const coursesData = require('../../src/data/courses');
const getCourses = async (req, res) => {
    try {
        const courses = await coursesData.getCourses();
        res.send(courses);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCourseById = async (req, res) => {
    try {
        const course = await coursesData.getCourseById(req.params.id);
        res.send(course);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCoursesByTopicId = async (req, res) => {
    try {
        const courses = await coursesData.getCoursesByTopicId(req.params.id);
        res.send(courses);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCoursesByInstId = async (req, res) => {
    try {
        const courses = await coursesData.getCoursesByInstId(req.params.id);
        res.send(courses);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getCoursesByStdId = async (req, res) => {
    try {
        const courses = await coursesData.getCoursesByStdId(req.params.id);
        res.send(courses);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCoursesEvaluationsByStdId = async (req, res) => {
    const {id} = req.params;
    try {
        const courses = await coursesData
            .getCoursesEvaluationsByStdId(id);
        res.send(courses);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCourseEvaluation = async (req, res) => {
    const {stdId, courseId, evaluation} = req.body;
    try {
        const course = await coursesData
            .addCourseEvaluation(stdId, courseId, evaluation);
        res.send(course);
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getCourseById,
    getCourses,
    getCoursesByTopicId,
    getCoursesByInstId,
    getCoursesByStdId,
    addCourseEvaluation,
    getCoursesEvaluationsByStdId
}