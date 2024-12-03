const mongoose= require('mongoose');

const userschema=new mongoose.Schema({
name:{type:String},
email:{type:String},
phoneno:{type:Number},

})
const User=mongoose.model("User", userschema);
export default User;