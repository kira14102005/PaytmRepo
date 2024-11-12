const express = require('express');
const router = express.Router();
const {User} = require('../db/schema')
const {validMid} = require('../midwares/validmid')

router.use(express.json());


router.post('/signup' , validMid, (req,res)=>{
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const password = req.body.password;
    const email = req.body.email;
    User.create({
        firstName :  firstName,
        lastName  :lastName,
        email : email,
        password : password,
    }).then((data)=>{
        console.log(data);
        res.status(200).json({
            msg : "Ok Created Record Success"
        })
    }).catch((err)=>{
        console.log(err);
        res.json({
            msg : "Error in Creating Record"
        })
    })

})
router.post('/signin' ,async (req,res)=>{
    const password = req.body.password;
    const email = req.body.email;
    const name = await User.findOne({
        email : email,
        password : password
    })
    console.log(name);
    if(name){
        res.json({
            msg : "User Found",
            id: name._id,
        })
    }
    else
    res.status(403).json({msg : "User Not Found"});

})
router.put('/update' , (req,res)=>{
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const password = req.body.password;
    const email =  req.headers.email;
User.updateOne({
    email : email
}, {firstName : firstName, 
    lastName : lastName, 
    password :  password,
}).then((data)=>{
    console.log(data);
    res.json({
        msg : "Record Updated"
    })
}).catch((err)=>{
    console.log(err);
    res.json({
        msg : "Error in Updating Record"
    })
})

});
module.exports = {router}