const mongoose = require("mongoose");

module.exports = mongoose.model("User",{
    fname:String,
    mname:String,
    lname:String,
    age:Number,
    email:String,
    contact:String,
    password:String
});