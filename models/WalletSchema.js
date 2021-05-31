const mongoose = require('mongoose')
const walletSchemaSchema = new mongoose.Schema({

    UserId: { type: Number},
    amount: { type: Number},
    desc: { type: String},
   
   


}, { timestamps: true })
const Wallet = new mongoose.model('Wallet', walletSchemaSchema)
module.exports = Wallet;