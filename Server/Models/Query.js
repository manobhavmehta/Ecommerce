const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const QuerySchema = new Schema({
    name : {type:String , required: true},
    email: {type:String,required:true},
    query: {type:String,required:true}
})

const QueryModel = model('Query',QuerySchema);

module.exports = QueryModel;