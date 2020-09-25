const mongoose = require("mongoose");

const WidgetSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true,"Hey you need a title"],
        minlength:[6, "need more input."],
        maxlength:[50, "Too long did not read."]
    }
}, {timestamps:true})

const Widget = mongoose.model("Widget",WidgetSchema);

module.exports = Widget;

