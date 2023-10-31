'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');
const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const list = await pool.request().query(sqlQueries.usersList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getUserByEmail = async (userEmail) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const user = await pool.request()
            .input('userEmail', sql.NVarChar, userEmail)
            .query(sqlQueries.userByEmail).then((result) => {
                if(result.recordset[0]) {
                    const {role, id} = result.recordset[0];
                    if (role === 2 || role === 3) {
                        return pool.request().input('userId', sql.Int, id).query(sqlQueries.instUserDetailsById);
                    } else {
                        return pool.request().input('userId', sql.Int, id).query(sqlQueries.stdUserDetailsById);
                    }
                } else {
                    return result;
                }

            })
        return user.recordset;
    } catch (error) {
        return error.message;
    }
};

module.exports = {
    getUsers,
    getUserByEmail,
}