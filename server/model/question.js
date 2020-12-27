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
                },
                answer:[{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Answer'
                }]

})


const Question = mongoose.model('Question',questionSchema);
module.exports = Question;