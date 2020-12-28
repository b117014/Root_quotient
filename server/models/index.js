const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.Promise = Promise;
 mongoose.connect('mongodb://localhost:27017/rt',{    
useUnifiedTopology: true,
}).then(res=>console.log("succ")).catch(err=>console.log(err));

module.exports.User = require('./user');
module.exports.Question = require('./question');
module.exports.Answer = require('./answer');
