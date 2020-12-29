
const express = require('express')
const router = express.Router()
const {addQuestion, deleteQuestion, getAllQuestion, updateQuestion, getQuestion} = require('../controllers/question')
const { loginRequired, correctUser } = require('../middleware/user')

router.get('/questions',loginRequired ,getAllQuestion)
router.post('/question', addQuestion)
router.put('/question/:q_id/:user_id',loginRequired, correctUser, updateQuestion)
router.delete('/question/:q_id',loginRequired, correctUser, deleteQuestion)

module.exports = router;