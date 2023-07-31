const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const LoginSchema = new Schema ({
    email: {type: String, required: true},
    pass: {type: String,required: true}
})

const LoginModel = model('Login',LoginSchema)

module.exports = LoginModel;