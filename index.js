const express= require("express");
const app = express();
app.use(express.json());
const {default:mongoose} =require("mongoose");


mongoose.connect("mongodb+srv://123:1234@cluster0.pf4v08v.mongodb.net/refferal",{useNewUrlParser:true})
.then(()=>{console.log("mongodb is connected")})
.catch((err)=>{console.log(err)});

const refferal = require("./refferal.js");

app.post("/admin/referral-commission",async (req,res)=>{

const {userId ,DepositBonus,BetInvestBonus,BetWinBonus} = req.body;

// if(!mongoose.isValidObjectId(userId)) {
//      return res.status(400).send({status:false,message:"not correct user id"})
// }
if(DepositBonus && typeof DepositBonus == "object"){

let user = await refferal.create(req.body);
return res.status(201).send({status:true,message:user})
}
if(BetInvestBonus && typeof BetInvestBonus =="object"){
     let user = await refferal.create(req.body);
     return res.status(201).send({status:true,message:user})
}
if(BetWinBonus && typeof BetWinBonus == "object"){
     let user = await refferal.create(req.body);
     return res.status(201).send({status:true,message:user})
}
})

app.listen(3000, () =>
{
  console.log("Listening at 3000");
});