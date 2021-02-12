// create links
const {Schema, model, Types} = require("mongoose");

const linkSchema = new Schema({
    title: {type: String},
    from: {type: String, required: true},
    to: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    date: {type: Date, required: true, default: Date.now},
    clicks: {type: Number,  default: 0},
    owner: {type: Types.ObjectId,ref: "User"}
})

module.exports = model("Link", linkSchema);