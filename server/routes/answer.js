
const express = require('express')
const router = express.Router()
const {addAnswer, deleteAnswer, updateAnswer} = require('../controllers/answer')
const { loginRequired} = require('../middleware/user')

router.post('/answer/:q_id/:user_id',loginRequired, addAnswer)

router.put('/answer/:a_id',loginRequired,  updateAnswer)

router.delete('/answer/:a_id/:user_id', loginRequired, deleteAnswer)

module.exports = router;