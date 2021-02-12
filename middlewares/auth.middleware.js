const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = async (req, res, next) =>{
    if(req.method === 'OPTIONS') return next();
    try{
        const token = req.headers.authorization.split(" ")[1] // token
        if(!token){
          return res.status(401).json({message: "Не авторизован"});
        } 
        const decoded =await jwt.verify(token, config.get("jwtSecret"));
        req.auth = decoded;
        next();
    }catch(err){
        res.status(401).json({err});
        return;
    }
}