
const express = require('express')
const router = express.Router()
const {addQuestion, deleteQuestion, getAllQuestion, updateQuestion, getQuestion} = require('../controllers/question')
const { loginRequired } = require('../middleware/user')

router.get('/questions',loginRequired ,getAllQuestion)

router.post('/question',loginRequired, addQuestion)

router.put('/question/:q_id/:user_id',loginRequired, updateQuestion)

router.delete('/question/:q_id',loginRequired, deleteQuestion)


router.get('/question/:q_id', getQuestion)
module.exports = router;