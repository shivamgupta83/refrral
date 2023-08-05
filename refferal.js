const mongoose = require("mongoose");

const referral = new mongoose.Schema({
userId : String,
     DepositBonus:[{
          level     :Number,
          levelBonus:String,
          _id:0
     }],
     BetInvestBonus:[{
          level      : Number,
          levelBonus:String,
          _id:0
      }],
     BetWinBonus:[{
          level     : Number,
          levelBonus:String,
          _id:0
      }]

},{timestamp:true})

const refferal = mongoose.model('refferel',referral);

module.exports = refferal;