require("../config/mongoose")();

const mongoose = require("mongoose");
//validator packages for unique validations and customs see npm mongoose-unique-validator and github on customs
const validate = require('mongoose-validator');
const uniquevalidator = require('mongoose-unique-validator');

module.exports = () =>{
    const PetSchema = new mongoose.Schema({
        name: {type: String, required:[true, "Name Required"], minlength:[3, "Name must have at least 3 characters"], index: true, unique: true},
        type: {type: String, required:[true, "Type Required"], minlength:[3, "Type must have at least 3 characters"]},
        description: {type: String, required:[true, "Description Required"], minlength:[3, "Description must have at least 3 characters"]},
        likes: {type: Number},
        skills: [{type: String}]
    }, {timestamps: true})
    Pet = mongoose.model('Pet', PetSchema);
    PetSchema.plugin(uniquevalidator, {message: 'Pet Name already in use. Use Another.'})
}