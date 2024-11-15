const express = require('express');
// const bp = require('body-parser');
const app = express();
const {router} = require('./routes/user')
const {acrouter} = require('./routes/account')
const cors  = require('cors');
const { User ,Balance} = require('./db/schema');
const port  =process.env.PORT || 3000;
app.use(express.json())
app.use(cors({}));
app.use("/v1/user" , router);
app.use("/v1/account" , acrouter);
app.listen(port, ()=>{
     console.log('I m Watching');
})




