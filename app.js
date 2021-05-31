const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//require database connection
const db = require('./database/db');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const User = require('./models/User');
const Wallet = require('./models/WalletSchema');
app.post("/addAmount", async (req, res) => {
    const { UserId, amount, desc } = req.body;
    const wallet = new Wallet({
        UserId, amount, desc
    });
    try {
        console.log("Result saved");
        const result = await wallet.save();
    } catch (error) {
        console.log(error)
    }

    //logic

    try {
        const referel = await User.find({ UserId });
        console.log(referel);
        console.log(referel[0].Parent1)
        console.log(referel[0].Parent2)
        console.log(referel[0].Parent3)
        const p1 = referel[0].Parent1;
        const p2 = referel[0].Parent2;
        const p3 = referel[0].Parent3;

        //for parent referel 1
        const pr1 = await Wallet.find({ UserId: p1 });
        console.log(pr1);
        if (pr1) {
            console.log("logic part work");
            const bonus = (amount * 40) / 100;
            // Wallet.find({UserId:pr1.UserId})
            Wallet.findOne({ UserId: pr1[0].UserId }, function (err, wallet) {
                wallet.amount = wallet.amount + bonus;
                wallet.save(function (err) {
                    console.log(err);
                });
            });
        }
        else {
            console.log("nothing to work");  
        }

        //for parent referel2
        const pr2 = await Wallet.find({ UserId: p2 });
        console.log(pr2);
        if (pr1) {
            console.log("logic part work");
            const bonus = (amount * 20) / 100;
            // Wallet.find({UserId:pr1.UserId})
            Wallet.findOne({ UserId: pr2[0].UserId }, function (err, wallet) {
                wallet.amount = wallet.amount + bonus;
                wallet.save(function (err) {
                    console.log(err);
                });
            });

        }
        else {
            console.log("nothing to work");

        }


        //for parent referel3
        const pr3 = await Wallet.find({ UserId: p3 });
        console.log(pr3);
        if (pr3) {
            console.log("logic part work");
            const bonus = (amount * 10) / 100;
            // Wallet.find({UserId:pr1.UserId})
            Wallet.findOne({ UserId: pr3[0].UserId }, function (err, wallet) {
                wallet.amount = wallet.amount + bonus;
                wallet.save(function (err) {
                    console.log(err);
                });
            });
        }
        else {
            console.log("nothing to work");
        }

    } catch (error) {
        console.log(error)
    }
    res.send("amount added and also added amount referel bonus of parent1,parent2 and parent3");
});


const port = process.env.PORT || 3300;
app.listen(port, () => {
    console.log(`listenning on port ${port}`);
})