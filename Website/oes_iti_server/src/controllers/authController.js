'use strict';

const usersData = require('../../src/data/users');
const getUsers = async (req, res, next) => {
    try {
        const users = await usersData.getUsers();
        res.send(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const loginByEmailAndPassword = async (req, res, next) => {
    const body = req.body;
    try {
        const user = await usersData.getUserByEmail(body.email);
        if (!user[0]) {
            return res.status(404).send({message: 'User not found'});
        } else {
            if (user[0].password === body.password) {
                return res.send(user[0]);
            } else {
                return res.status(400).send({message: 'Password is incorrect'});
            }
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getUsers,
    loginByEmailAndPassword
}