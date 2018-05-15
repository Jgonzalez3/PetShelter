const mongoose =  require("mongoose");

module.exports = ()=>{
    mongoose.connect('mongodb://localhost/meanbelt1');
    mongoose.Promise = global.Promise;
}