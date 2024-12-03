const mongoose= require('mongoose');
const productschema=new mongoose.Schema({
    name:{type:String},
    category:{type:String},
    price:{type:Number},
    stock:{type:Number},
})
const Product= mongoose.model("Product",productschema);
export default Product;