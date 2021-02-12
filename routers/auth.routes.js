const {Router, json} = require("express");
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require('config');
const auth = require('../middlewares/auth.middleware');
// registration on server
const jsonParser = json();
router.post(
    "/register",
    [
        jsonParser,
        check('email', 'Некорректный email').isEmail(),
        check('password', 'Минимальная длинна пароля 6 символов').isLength({min:6})
    ],
    async (req, res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(200).json({
                status:false,
                errors:errors.array(),
                message:'Некоректные данные при регистрации'
            });
        }
        const {email, password} = req.body;
        const candidate = await User.findOne({email});
        if(candidate){
            return res.status(200).json({status: false, message: 'Такой пользователь уже существует'})
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password:hashedPassword});
        await user.save();
        return res.status(200).json({status: true, message: 'Пользователь создан'})
    }catch(err){
        return res.status(200).json({status: false, message: err.message});
    }
    
});
// login on server
router.post(
    "/login",
    [
        jsonParser,
        check('email', 'Некорректный email').normalizeEmail().isEmail()
    ],
    async (req, res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Неверные данные'
            });
        }
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: 'Пользователь не найден'});
        const isMatch = await bcrypt.compare(password, user.password); // Сравнение пароля с bcrypt
        if(!isMatch) return res.status(400).json({message: 'Неверный пароль, попробуйте снова'});
        const token = jwt.sign({userId:user.id}, config.get('jwtSecret'), {expiresIn:'1h'});
        res.json({token, userId:user.id});
    }catch(err){
        res.sendStatus(500).json({message: err.message});
    }
    
});
router.get("/user", auth, async(req, res)=>{
    if(!req.auth) return res.status(401).json({message:'Пользователь не найден'});
    const user = await User.findById(req.auth.userId);
    if(!user) return res.status(401).json({message: 'Пользователь не существует'});
    res.status(200).json({user:{id:user._id, avatar: user.email.substr(0,1), email:user.email, links:user.links}}); 
})

module.exports = router;