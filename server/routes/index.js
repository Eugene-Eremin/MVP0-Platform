const Router = require('express');

const router = new Router();

const test1 = require('./test1');
const test2 = require('./test2');

router.use('/test1', test1)
router.use('/test2', test2)

module.exports = router