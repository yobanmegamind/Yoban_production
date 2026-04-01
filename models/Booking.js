const mongoose = require("mongoose");

module.exports = mongoose.model("Booking",{
    user:String,
    date:String
});