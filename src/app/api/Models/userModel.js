const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    friends: { type: Array }
})

module.exports= mongoose.models.Users || mongoose.model("Users", userModel)
