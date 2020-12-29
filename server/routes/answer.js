
const express = require('express')
const router = express.Router()
const {addAnswer, deleteAnswer} = require('../controllers/answer')
const { loginRequired,correctUser} = require('../middleware/user')

router.post('/answer/:q_id/:user_id',loginRequired, addAnswer)
router.delete('/answer/:a_id/:user_id', loginRequired, correctUser, deleteAnswer)

module.exports = router;