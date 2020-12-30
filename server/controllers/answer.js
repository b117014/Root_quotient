
const db = require('../models')
const jwt = require('jsonwebtoken')

exports.addAnswer = async (req,res,next)=>{
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

exports.updateAnswer = async (req,res,next)=>{
                            try{
                                let token = req.headers.authorization.split(" ")[1];
                                let user = jwt.decode(token)
                                
                                let answer = await db.Answer.findById(req.params.a_id);
                                if(answer.user == user.id){
                                    answer.answer = req.body.answer
                                    await answer.save()
                                    res.send('sucess')
                                }
                                else{
                                    res.send('not found')
                                }
                            
                            }catch(err){
                                return next(err)
                            }
                        }

exports.deleteAnswer = async (req,res,next)=>{
    try{
        let token = req.headers.authorization.split(" ")[1];
        let user = jwt.decode(token)
                                
       let answer = await db.Answer.findById(req.params.a_id);
       if(answer.user==user.id){
           answer.remove()
           answer.save()
           res.send('success')
       }
       res.send('err')
    }catch(err){
        return next(err)
    }
}