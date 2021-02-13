const express = require('express');
const multer = require('multer');

// const { userController } = require('../controller');
const { signup } = require('../controller/index')

const router = express.Router();

router.post('/signup', multer({ dest: 'temp/', limits: { fieldSize: 8 * 1024 * 1024 } }).single(
    'avatar'
), signup);

module.exports = {
    userRoute: router
};
