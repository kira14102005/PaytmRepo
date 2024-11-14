const jwt =  require('jsonwebtoken');
const JWT_SECRET = require('../config');
 function authMid(req, res,next){
    const token =  req.headers.token;
    if(!token || !token.startsWith('Bearer')){
        res.status(401).json({msg : "Unauthorized"});
        return;
    }
    const tokenValue = token.split(' ')[1];
    console.log(tokenValue)
    jwt.verify(tokenValue, JWT_SECRET, (err, decoded)=>{
        if(err){
            res.status(401).json({msg : "Unauthorized"});
            return;
        }
        req.email = decoded.email;
        next();
    })
 }
 module.exports = {authMid}