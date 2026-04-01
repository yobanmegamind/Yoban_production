const mongoose = require("mongoose");

module.exports = mongoose.model("Photo",{
    image:String,
    ratings:[Number],
    comments:[
        {
            user:String,
            text:String
        }
    ]
});