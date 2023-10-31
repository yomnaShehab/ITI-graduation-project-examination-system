'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getTopics = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('topics');
        const list = await pool.request().query(sqlQueries.topicsList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getTopicById = async (topicId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('topics');
        const topic = await pool.request()
            .input('topicId', sql.Int, topicId)
            .query(sqlQueries.topicById);
        return topic.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getTopics,
    getTopicById,
}