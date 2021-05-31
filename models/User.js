const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({

    UserId: { type: Number},
    Parent1: { type: Number},
    Parent2: { type: Number},
    Parent3: { type: Number},
   


}, { timestamps: true })
const User = new mongoose.model('User', userSchema)
module.exports = User;