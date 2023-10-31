'use strict';

const instructorsData = require('../../src/data/instructors');
const getInstructors = async (req, res, next) => {
    try {
        const instructors = await instructorsData.getInstructors();
        res.send(instructors);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getInstructorById = async (req, res, next) => {
    try {
        const instructor = await instructorsData.getInstructorById(req.params.id);
        res.send(instructor);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getInstructorByDepId = async (req, res, next) => {
    try {
        const instructors = await instructorsData.getInstructorsByTDepId(req.params.id);
        res.send(instructors);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
module.exports = {
    getInstructors,
    getInstructorById,
    getInstructorByDepId
}