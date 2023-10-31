'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getInstructors = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('instructors');
        const list = await pool.request().query(sqlQueries.instructorsList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getInstructorById = async (insId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('instructors');
        const instructor = await pool.request()
            .input('insId', sql.Int, insId)
            .query(sqlQueries.instructorById);

        return instructor.recordset;
    } catch (error) {
        return error.message;
    }
};

const getInstructorsByTDepId = async (depId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('instructors');
        const instructors = await pool.request()
            .input('depId', sql.Int, depId)
            .query(sqlQueries.instructorsByDepId);
        return instructors.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getInstructors,
    getInstructorById,
    getInstructorsByTDepId,
}