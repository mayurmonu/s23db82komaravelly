const mongoose = require("mongoose")
const lionSchema = mongoose.Schema({
    lion_color: { type : String,
        required : true,
        minlength : 4,
        maxlength : 7,
    },
    lion_breed: {type: String,
        required : true,
        minlength : 4,
        maxlength : 7,
    },
    lion_price: { type:Number,
        min : 0,
        max : 300000,
}})
module.exports = mongoose.model("lion",lionSchema)