require('dotenv').load
const db = require('../models');
const jwt = require('jsonwebtoken');

exports.signUp = async function(req,res,next){
                  try{
                      let newUser = await db.User.create(req.body);
                      
                      
                      newUser.save();
                   
                      console.log(newUser)

                      let {id,email} = newUser;
                      let token = jwt.sign({
                             id,
                             email
                      },process.env.SECRET_KEY)
                     
                      return res.status(200).json({
                          id,
                          
                          token
                      })
                  }catch(err){
                      if(err.code===11000)
                      {
                          err.message="sorry please enter correct info"
                      }
                      return next({
                          status:400,
                          message:err.message
                      })
                  }
}

exports.signIn = async function(req,res,next){
       try{
           let user = await db.User.findOne({email:req.body.email});
          
           if(user){
            let isMatch = await user.comparePassword(req.body.password);
            
            let {id,email} = user
           
           if(isMatch){
               let token = jwt.sign({
                   id,
                 
                   email
               },process.env.SECRET_KEY)

               return res.status(200).json({
                   token,
                   id
               })
           }else{
               return next({
                   status:400,
                   message:"email is not valid"
               })
           }
        }else{
            return next({
                status:401,
                message:'User not found'
            })
        }

       }catch(err){
           console.log(err)
        return next({
            status:400,
            message: err.message
        })
       }
}