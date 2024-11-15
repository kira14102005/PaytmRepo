const mong = require('mongoose')
mong.connect('mongodb+srv://raiharshit66:WIHIYsLnhGeGzm1p@clusterr.qbnob.mongodb.net/paytmDB');
const userSchema = mong.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        lowerCase: true,
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
})
const balanceSchema = mong.Schema({
    userId: {
        type: mong.Schema.Types.ObjectId,      //REFERENCE to USER
        ref: 'UserTable',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
})
const Balance = new mong.model('BalanceTable', balanceSchema)
const User = mong.model('UserTable', userSchema);

module.exports = { User };