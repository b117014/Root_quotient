const dot = require("dotenv");
dot.load;
const jwt =  require('jsonwebtoken');

 
// 1. first function will user logged    -- Authentication

exports.loginRequired  =  function(req,res,next){
              try{
                  let token = req.headers.authorization.split(" ")[1];     // Bearer kjhkgfkhkghkhkghfk
                  console.log(req.headers.authorization);
                  jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
                      
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
