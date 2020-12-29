const db = require('../models')

exports.addQuestion = async (req,res,next)=>{

        try{
            console.log(req.body)
            let newQuestion = await db.Question(req.body)
            newQuestion.user = req.body.user_id

            let user = await db.User.findById(req.body.user_id)
            user.question.push(newQuestion.id)

            await newQuestion.save()
            await user.save()

            res.send(newQuestion)
        }catch(err){
            return next(err)
        }
}


exports.getAllQuestion = async (req,res,next)=>{

    try{
        let questions = await db.Question.find({})
       
        res.send(questions)
    }catch(err){
        return next(err)
    }
}

exports.updateQuestion = async (req,res,next)=>{

    try{
        let questions = await db.Question.findById(req.params.q_id)
        let {description, title, tag} = req.body
        questions.description = description
        questions.title = title
        questions.tag = tag
        questions.save()
        res.send(questions)
    }catch(err){
        return next(err)
    }
}

exports.deleteQuestion = async (req,res,next)=>{

    try{
        let question = await db.Question.findByIdAndRemove(req.params.q_id)

        res.send(question)
    }catch(err){
        return next(err)
    }
}


