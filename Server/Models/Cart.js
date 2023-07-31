const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const CartSchema = new Schema ({
    email: {type:String , required:true , default:'' , unique:true},
    cart:[
        {
            name: {type:String , default:""},
            image: {type:String , default:""},
            price: {type:String , default:""},
            review: {type:String ,  default:""},
        }
    ]
}) 

const CartModel = model('Cart',CartSchema);

module.exports = CartModel;
