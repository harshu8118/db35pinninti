mongoose = require("mongoose");
const LionSchema = mongoose.Schema({
Lion_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Lion",
LionSchema)