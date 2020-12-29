
const db = require('../models')

exports.addAnswer = async (req,res,next)=>{
    try{

        let newAnser = await db.Answer.create({answer:req.body.answer})
        console.log(newAnser)
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

exports.deleteAnswer = async (req,res,next)=>{
    try{

       let answer = await db.Answer.findByIdAndRemove(req.params.a_id);
        res.send(answer)
    }catch(err){
        return next(err)
    }
}