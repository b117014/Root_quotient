const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
                title:{
                     type:String,
                     
                },
                tag:{
                    type:String,
              
                },
                description:{
                    type: String
                },
                user:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'User'
                }

})


const Question = mongoose.model('Question',questionSchema);
module.exports = Question;