require('dotenv').load;

const express = require('express');
const router = express.Router();
const {signIn,signUp} = require('../controllers/user')

router.post('/register',signUp);
router.post('/login',signIn);

module.exports = router;