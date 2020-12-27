const mongoose = require('mongoose');

mongoose.set('debug',true);
mongoose.Promise = Promise;
 mongoose.connect('mongodb://localhost/root',{    useNewUrlParser: true,

useUnifiedTopology: true,
}).then(res=>console.log("succ")).catch(err=>console.log(err));

module.exports.User = require('./user');
module.exports.Question = require('./question');
