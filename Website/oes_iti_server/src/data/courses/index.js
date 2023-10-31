'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCourses = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const list = await pool.request().query(sqlQueries.coursesList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCourseById = async (courseId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const course = await pool.request()
            .input('courseId', sql.Int, courseId)
            .query(sqlQueries.courseById);
        return course.recordset;
    } catch (error) {
        return error.message;
    }
};

const getCoursesByTopicId = async (topicId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const courses = await pool.request()
            .input('topicId', sql.Int, topicId)
            .query(sqlQueries.coursesByTopicId);
        return courses.recordset;
    } catch (error) {
        return error.message;
    }
};

const getCoursesByInstId = async (instId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const courses = await pool.request()
            .input('insId', sql.Int, instId)
            .query(sqlQueries.coursesByInstId);
        return courses.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCoursesByStdId = async (stdId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const courses = await pool.request()
            .input('stdId', sql.Int, stdId)
            .query(sqlQueries.coursesByStdId);
        return courses.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCoursesEvaluationsByStdId = async (stdId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const evaluations = await pool.request()
            .input('stdId', sql.Int, stdId)
            .query(sqlQueries.courseEvaluation);
        return evaluations.recordset;
    } catch (error) {
        return error.message;
    }
}

const addCourseEvaluation = async (stdId, courseId, evaluation) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('courses');
        const courseEval = await pool.request()
            .input('stdId', sql.Int, stdId)
            .input('crsId', sql.Int, courseId)
            .input('crsMaterialHelpful', sql.Int, evaluation.courseMaterial)
            .input('crsContent', sql.Int, evaluation.courseContent)
            .input('crsWellOrganised', sql.Int, evaluation.courseWellOrganised)
            .input('instClassTime', sql.Int, evaluation.instClassTime)
            .input('instResponceQus', sql.Int, evaluation.instResponseQus)
            .input('instGiveClearEx', sql.Int, evaluation.instGiveClearEx)
            .query(sqlQueries.updateCourseEvaluation);
        return courseEval.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getCourses,
    getCourseById,
    getCoursesByTopicId,
    getCoursesByInstId,
    getCoursesByStdId,
    getCoursesEvaluationsByStdId,
    addCourseEvaluation
}