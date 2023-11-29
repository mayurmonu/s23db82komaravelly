const mongoose = require("mongoose")
const lionSchema = mongoose.Schema({
    lion_color: String,
    lion_breed: String,
    lion_price: { type:Number,
        min : 0,
        max : 300000,
}})
module.exports = mongoose.model("lion",lionSchema)