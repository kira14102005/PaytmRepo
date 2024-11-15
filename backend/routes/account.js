const express = require('express');
const { Balance } = require('../db/schema');
const port = process.env.PORT || 3000;
const acrouter = express.Router();
const {authMid} = require('../midwares/authmid')
const mong = require('mongoose')
acrouter.get('/balance',authMid, async (req, res) => {
    const userId = req.body.userId
    const ac = await Balance.findOne({
        userId: userId,
    });
    res.json({
        balance: ac.balance,
    })  

});

acrouter.post('/transfer', authMid, async (req, res) => {
    const session = await mong.startSession();
    session.startTransaction();
    try {
        const { reId, amount } = req.body;
        const sender = await Balance.find(
            { userId: req.headers.userId }
        ).session(session)
        if (sender.balance < amount) {
            await session.abortTransaction();
            res.status(400).json({
                msg: "Insufficient Balance"
            })
        }

        const receiver = await Balance.find(
            { userId: reId }
        ).session(session);
        if (!receiver) {
            await session.abortTransaction();
            res.json({
                msg: "Receiver Doesnt Exist"
            })
        }
        await Balance.update({
            userId: req.headers.userId,
        }, {
            '$inc': {
                balance: -amount,
            }
        }).session(session)
        await Balance.update({
            userId: reId
        }, {
            '$inc': {
                balance: amount,
            }
        }).session(session)
    }
    catch(err){
        session.abortTransaction();
        res.status(500).json({
            msg : "SERVER failure"
        })
    }
    session.commitTransaction();
    console.log("DONE")
    res.json({
        msg: "SUCCESS TRANSFER"
    })

})


module.exports = { acrouter }