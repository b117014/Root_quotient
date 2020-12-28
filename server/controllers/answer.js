
const db = require('../models')

exports.addAnswer = (req,res,next)=>{
    try{

        let newAnser = await db.Answer.create({answer:req.body.answer})
        newAnser.user = req.params.user_id
        newAnser.question = req.params.q_id
        let question = await db.Question.findById(req.params.q_id)
        question.answer.push(newAnser.id)
        await newAnser.save()
        await question.save()

        res.send(newAnser)
    }catch(err){
        return next(err)
    }
}