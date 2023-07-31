const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const RegisterSchema = new Schema ({
    name: {type: String, required: true},
    email: {type: String, required: true , unique: true},
    pass: {type: String, required: true },
    cpass: {type: String, required: true }
});

const RegisterModel = model('Register',RegisterSchema);

module.exports = RegisterModel;
