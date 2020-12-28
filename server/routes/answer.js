
const express = require('express')
const router = express.Router()
const {} = require('../controllers/answer')

router.post('/answer/:q_id', addAnswer)


module.exports = router;