const express = require('express');
const router = express.Router();
const { User } = require('../db/schema')
const { validMid } = require('../midwares/validmid')
const JWT_SECRET = require('../config'); //IMPORT without object  destructuring
const { authMid } = require('../midwares/authmid');
router.use(express.json());

const jwt = require('jsonwebtoken');
let token;
router.post('/signup', validMid, (req, res) => {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const password = req.body.password;
    const email = req.body.email;
    User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }).then((data) => {
        console.log(data);
        res.status(200).json({
            msg: "Ok Created Record Success"
        })
    }).catch((err) => {
        console.log(err);
        res.json({
            msg: "Error in Creating Record"
        })
    })

})
router.post('/signin', async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;
    const name = await User.findOne({
        email: email,
        password: password
    })
    console.log(JWT_SECRET);
    if (name) {
        
        token = jwt.sign({ email: email }, JWT_SECRET);
        res.json({
            msg: "User Found",
            token: token,
            id: name._id,
        })
    }
    else
        res.status(403).json({ msg: "User Not Found" });

})
router.put('/update', authMid, (req, res) => {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const password = req.body.password;
    const email = req.email;

    User.updateOne({
        email: email
    }, {
      firstName : firstName,
        lastName: lastName,
        password: password,
    }).then((data) => {
        console.log(data);
        res.json({
            msg: "Record Updated"
        })
    }).catch((err) => {
        console.log(err);
        res.json({
            msg: "Error in Updating Record"
        })
    })

});

router.get('/bulk', authMid, async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                '$regex': filter,
            }
        }
            , {
            lastName: {
                "$regex": filter,
            }
        },  ]
    })
    res.json({
        Users : users.map((obj)=>{
            return { FirstName : obj.firstName,
                LastName : obj.lastName,
                Email : obj.email}
        })
    })
})
module.exports = { router }