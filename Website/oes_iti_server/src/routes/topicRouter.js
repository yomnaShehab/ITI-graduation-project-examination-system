'use strict';

const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/', topicController.getTopics);
router.get('/:id', topicController.getTopicById);

module.exports =  {
    routes: router
}