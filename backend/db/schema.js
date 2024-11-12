const mong = require('mongoose')
mong.connect('mongodb+srv://raiharshit66:WIHIYsLnhGeGzm1p@clusterr.qbnob.mongodb.net/paytmDB');
const userSchema  =mong.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
})
const User = mong.model('UserTable' , userSchema);

module.exports =  {User};