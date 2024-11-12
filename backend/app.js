const express = require('express');
// const bp = require('body-parser');
const app = express();
const {router} = require('./routes')
const port  =process.env.PORT || 3000;
app.use(express.json())
app.use(router);
app.listen(port, ()=>{
     console.log('Makima is Watching');
})

app.get('/' , (req,res)=>{
    
});


