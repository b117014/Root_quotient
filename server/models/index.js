const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.Promise = Promise;
 mongoose.connect('mongodb+srv://prabhat:prabhat@prabhat.usk7p.mongodb.net/qa',{    
useUnifiedTopology: true,
}).then(res=>console.log("success")).catch(err=>console.log(err));

module.exports.User = require('./user');
module.exports.Question = require('./question');
module.exports.Answer = require('./answer');
