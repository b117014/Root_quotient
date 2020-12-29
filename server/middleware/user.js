const dot = require("dotenv");
dot.load;
const jwt =  require('jsonwebtoken');

console.log(process.env.SECRET_KEY)
// make two function 
// 1. first function will user logged    -- Authentication
//2 .second function will check correct user -- Autherization

exports.loginRequired  =  function(req,res,next){
              try{
                  let token = req.headers.authorization.split(" ")[1];     // Bearer kjhkgfkhkghkhkghfk
                  console.log(req.headers.authorization);
                  jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
                       console.log(decoded)
                                   if(decoded){
                                    
                                     return next()
                                   }else{
                                       return next({
                                           status:404,
                                           message:"please enter your password"
                                       })
                                   }
                  })
              }catch(err){
                  return next({
                      status:404,
                      message:"please enter right password or username"
                  })
              }

}

exports.correctUser = function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
                 if(decoded && decoded.id===req.params.user_id)
                 {
                     return next();
                 }
                 else{
                     return next({
                         status:404,
                         message:"you have to login first"
                     })
                 }
        })
    }catch(err){
        return next({
            status:404,
            message:"first login"
        })
    }
}