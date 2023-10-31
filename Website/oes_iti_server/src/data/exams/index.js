'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getExams = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const list = await pool.request().query(sqlQueries.examsList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getExamById = async (examId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const exam = await pool.request()
            .input('examId', sql.Int, examId)
            .query(sqlQueries.examById);
        return exam.recordset;
    } catch (error) {
        return error.message;
    }
}

const getExamResult = async (examId, stdId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const examResult = await pool.request()
            .input('examId', sql.Int, examId)
            .input('stdId', sql.Int, stdId)
            .query(sqlQueries.examResultByExamId);
        return examResult.recordset;
    } catch (error) {
        return error.message;
    }
}

const getExamsByCourseId = async (courseId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const exams = await pool.request()
            .input('examId', sql.Int, courseId)
            .query(sqlQueries.examsByCourseId);
        return exams.recordset;
    } catch (error) {
        return error.message;
    }
}

const getExamsByStdId = async (stdId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const exams = await pool.request()
            .input('stdId', sql.Int, stdId)
            .query(sqlQueries.examsByStudentId);
        return exams.recordset;
    } catch (error) {
        return error.message;
    }
}
const getExamsInCourseByStdId = async (stdId, courseId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const courseExams = await pool.request()
            .input('stdId', sql.Int, stdId)
            .input('courseId', sql.Int, courseId)
            .query(sqlQueries.examsByStdIdAndCrsId);
        return courseExams.recordset;
    } catch (error) {
        return error.message;
    }
}

const answerAndCorrectExamQuestions = async (questionsAnswers) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const transaction = new sql.Transaction(pool);
        await transaction.begin();
        try {
            for (let i = 0; i < questionsAnswers.length; i++) {
                let request = new sql.Request(transaction);
                request
                    .input('Std_Id', questionsAnswers[i].stdId)
                    .input('Exam_Id', questionsAnswers[i].examId)
                    .input('Quest_Id', questionsAnswers[i].questId)
                    .input('Std_Ans_txt', questionsAnswers[i].answer)
                    .input('Std_Qs_Grade', questionsAnswers[i].grade);

                await request.query(sqlQueries.answerExams);
            }

            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
        console.log('Transaction commited.');
        const examGrade = await getTotalExamGrade(questionsAnswers[0].stdId, questionsAnswers[0].examId, questionsAnswers);
        return examGrade[0];
    } catch (error) {
        return error.message;
    }
}

const getTotalExamGrade = async (stdId, examId, answers) => {

    let grade = 0;
    answers.forEach((answer) => grade += Number(answer.grade));
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('exams');
        const courseExams = await pool.request()
            .input('stdId', sql.Int, stdId)
            .input('examId', sql.Int, examId)
            .input('grade', sql.Int, grade)
            .query(sqlQueries.updateExamGrade)
        return courseExams.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getExamById,
    getExamResult,
    getExams,
    getExamsByCourseId,
    getExamsByStdId,
    getExamsInCourseByStdId,
    answerAndCorrectExamQuestions
}
