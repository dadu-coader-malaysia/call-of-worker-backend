const mongoose = require('mongoose');
const bcrypt =require('bcrypt')


const devSchema = new mongoose.Schema({
    devId:{
        type: String,
         required: true,
          trim: true,
           
    },
    email:{
        type: String,
         required: true,
          trim: true,
    },
    botName:{
        type: String,
        required: true,
         trim: true,
          minlength: 3,
           maxlength: 50,

    },

    
    password:{
        type: String,
         required: true, 
         trim: true,
          minlength: 8,
           maxlength: 33,
    },
    isAdmin:{
        type: Boolean, default: true
    }

  }

   
 ,{timestamps: true});


devSchema.pre('save', async function(){
    if(!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    
})


devSchema.methods.comparePassword = async function(enteredPassword){
     return await bcrypt.compare(enteredPassword, this.password)
}





module.exports = mongoose.model("Dev", devSchema);