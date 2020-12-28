const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
                answer:{
                    type:String
                },
                created_date:{
                    type: Date,
                    default: Date.now()
                },
                user:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'User'
                },
                question:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Question'
                }

})


const Answer = mongoose.model('Answer',answerSchema);
module.exports = Answer;