const db = require('../models')

exports.addQuestion = async (req,res,next)=>{

        try{
            let newQuestion = await db.Question(req.body)
            newQuestion.user = req.params.user_id
            newQuestion.save()
            res.send(newQuestion)
        }catch(err){
            return next(err)
        }
}


exports.getAllQuestion = async (req,res,next)=>{

    try{
        let questions = await db.Question({})
       
        res.send(questions)
    }catch(err){
        return next(err)
    }
}

exports.deleteQuestion = async (req,res,next)=>{

    try{
        let question = await db.Question.findByIdAndRemove(req.params.id)

        res.send(question)
    }catch(err){
        return next(err)
    }
}

