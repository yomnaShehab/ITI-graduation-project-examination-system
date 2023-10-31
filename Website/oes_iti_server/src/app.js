'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRouter = require('./routes/studentRoute');
const courseRouter = require('./routes/courseRoute');
const instructorRouter = require('./routes/instructorRoute');
const topicRouter = require('./routes/topicRouter');
const authRouter = require('./routes/authRouter');
const examRouter = require('./routes/examRoute');
const app = express();
const router = express.Router();
const healthCheckRouter = router.get('/',
    (req, res) => {
        res.status(200).json({message: 'Server is running'});
    });
app.use(bodyParser.json());
app.use(cors());

app.use('/api/students', studentRouter.routes);
app.use('/api/courses', courseRouter.routes);
app.use('/api/instructors', instructorRouter.routes);
app.use('/api/topics', topicRouter.routes);
app.use('/api/users', authRouter.routes);
app.use('/api/exams', examRouter.routes);
app.use('/health-check', healthCheckRouter);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));