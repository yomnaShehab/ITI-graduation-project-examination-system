'use strict';

const topicsData = require('../../src/data/topics');
const getTopics = async (req, res, next) => {
    try {
        const topics = await topicsData.getTopics();
        res.send(topics);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getTopicById = async (req, res, next) => {
    try {
        const topic = await topicsData.getTopicById(req.params.id);
        res.send(topic);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    getTopicById,
    getTopics,
}