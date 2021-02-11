const jwt = require('jsonwebtoken');
const config = require('config');
module.exports = (req, res, next) =>{
    if(req.method === 'OPTIONS') return next();
    console.log('HEADERS:', req.headers);
    try{
        const token = req.headers.authorization.split(" ")[1] // token
        console.log('token', token);
        if(!token){
          return res.status(401).json({message: "Не авторизован"});
            
        } 
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.auth = decoded;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({err});
        return;
    }
}