
const express = require('express')
const router = express.Router()
const {addQuestion, deleteQuestion, getAllQuestion} = require('../controllers/question')
const { loginRequired } = require('../middleware/user')

router.get('/questions',loginRequired ,getAllQuestion)
router.post('/question', addQuestion)

router.delete('/question/:id', deleteQuestion)

module.exports = router;