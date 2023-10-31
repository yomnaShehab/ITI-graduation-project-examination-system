'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getStudents = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('students');
        const list = await pool.request().query(sqlQueries.studentslist);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getStudentById = async (studentId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('students');
        const student = await pool.request()
            .input('studentId', sql.Int, studentId)
            .query(sqlQueries.studentbyId);
        return student.recordset;
    } catch (error) {
        return error.message;
    }
};

const getStudentsByCourseId = async (courseId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('students');
        const students = await pool.request()
            .input('courseId', sql.Int, courseId)
            .query(sqlQueries.studentsbyCourseId);
        return students.recordset;
    } catch (error) {
        return error.message;
    }
};

const getStudentsByInstructorId = async (insId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('students');
        const students = await pool.request()
            .input('insId', sql.Int, insId)
            .query(sqlQueries.studentsByInstructorId);
        return students.recordset;
    } catch (error) {
        return error.message;
    }
};

const getStudentsByDepId = async (depId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('students');
        const students = await pool.request()
            .input('depId', sql.Int, depId)
            .query(sqlQueries.studentesByDepId);
        return students.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getStudents,
    getStudentById,
    getStudentsByCourseId,
    getStudentsByInstructorId,
    getStudentsByDepId
}