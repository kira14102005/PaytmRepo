const zod = require('zod'); const express = require('express');
// app.use(express.json())

const userRecord = zod.object({
    firstName: zod.string().min(1),
    lastName: zod.string().min(1),
    password: zod.string().min(7),
    email: zod.string().email(),

})
function validMid(req, res, next) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const password = req.body.password;
    const email = req.body.email;
    const user = { firstName, lastName, password, email };
    const response = userRecord.safeParse(user);
    if (response.success) {
        next();
    }
    else {
        res.json({ msg: "Errror in input" });
    }
}
module.exports = { validMid };