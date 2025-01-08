const express = require('express');
const { getSamples, createSample, signUp, login } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login)

module.exports = router;
