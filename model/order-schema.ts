 import mongoose from 'mongoose';
 
 const orderschema=new mongoose.Schema({
    user:{
        name:{type:String},
        email:{type:String},
    },
    product:{type:String},
    date:{type:Date},
    quanity:{type:Number},
})
const Order= mongoose.model("Order",orderschema);
export default Order;