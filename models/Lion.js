const mongoose = require("mongoose") 
const LionSchema = mongoose.Schema({ 
 Brand: {
    type: String,
    minlength: 9
},
 cost: Number, 
 size: {
    type: String,
    minlength: 5
}, 
}) 
 
module.exports = mongoose.model("Lion", 
LionSchema)