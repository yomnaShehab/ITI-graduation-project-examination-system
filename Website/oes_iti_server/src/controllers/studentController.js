'use strict';

const studentsData = require('../../src/data/students');
const getStudents = async (req, res, next) => {
    try {
        const students = await studentsData.getStudents();
        res.send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const student = await studentsData.getStudentById(req.params.id);
        res.send(student);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getStudentsByCourseId = async (req, res, next) => {
    try {
        const students = await studentsData.getStudentsByCourseId(req.params.id);
        res.send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getStudentsByInstructorId = async (req, res, next) => {
    try {
        const students = await studentsData.getStudentsByInstructorId(req.params.id);
        res.send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getStudentsByDepId = async (req, res, next) => {
    try {
        const students = await studentsData.getStudentsByDepId(req.params.id);
        res.send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getStudents,
    getStudentById,
    getStudentsByCourseId,
    getStudentsByInstructorId
}