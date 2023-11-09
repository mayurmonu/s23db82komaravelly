const mongoose = require("mongoose")
const lionSchema = mongoose.Schema({
    lion_color: String,
    lion_breed: String,
    lion_price: Number
})
module.exports = mongoose.model("lion",lionSchema)