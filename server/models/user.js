const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
                username:{
                     type:String,
                    
                     
                },
                email:{
                    type:String,
                    required:true
                },
                password:{
                    type:String,
                    required:true
                    
                },
                is_active:{
                    type:Boolean,
                    default: true
                },
                date:{
                    type:Date,
                    default: Date.now()
                },
                question:[
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Question'
                    }
                ]

},{
    timestamps:true
})

userSchema.pre('save',async function(next){
         try{
             if(!this.isModified('password')){
                 return next();
             }
             let hashPassword = await bcrypt.hash(this.password,10);
             this.password = hashPassword;
             return next(); 
         }catch(err){
             return next(err);
         }
})

userSchema.methods.comparePassword = async function(userPassword,next){
           try{
              
               let isMatch = await bcrypt.compare(userPassword,this.password);
              
               return isMatch;
           }catch(err){
               return next(err)
           }
}

const User = mongoose.model('User',userSchema);
module.exports = User;