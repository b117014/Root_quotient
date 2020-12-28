
const express = require('express')
const router = express.Router()
const {addQuestion, deleteQuestion, getAllQuestion} = require('../controllers/question')

router.get('/questions', getAllQuestion)
router.post('/question', addQuestion)

router.delete('/question/:id', deleteQuestion)

module.exports = router;