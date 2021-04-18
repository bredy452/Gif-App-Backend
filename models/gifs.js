const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const gifSchema = new Schema({
   gifId: String, 
   numberOfLikes: Number
});

module.exports = model('Gif', gifSchema)