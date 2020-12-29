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
                created_date:{
                    type:Date,
                    default: Date.now()
                },
                user:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'User'
                },
                answer:[{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'Answer'
                }],
                views:
                    {
                        type: Number,
                        default:0
                    }
              

})


const Question = mongoose.model('Question',questionSchema);
module.exports = Question;