const {Router, json} = require('express');
const Link = require('../models/Link');
const router = Router();
const shortid = require('shortid');
const auth = require("../middlewares/auth.middleware");
const config = require("config");
const jsonParser = json();
// generate link
router.post('/generate', [auth, jsonParser], async(req, res)=>{
    // try{
        const baseUrl = config.get('baseUrl');
        const {link} = req.body;
        const code = shortid.generate();
        const existing = await Link.findOne({from:link});
        if(existing) return res.json({link: existing});
        const to = baseUrl + '/t/' + code;
        const savedLink = new Link({ code, to, from:link, owner:req.auth.userId});
        const result = await savedLink.save();
        console.log(result);
        res.status(201).json({link:result});
    // }catch(err){
    //     return res.status(500).json({message: 'Сервис не отвечает', error: err})
    // }
});
router.get("/", async(req, res)=>{
    try{
        const links =await Link.find();
        res.json({links});
    }catch(err){
        return res.status(500).json({message: 'Сервер не отвечает'})
    }
});

//Получаем список ссылок пользователя
router.get('/my', auth, async(req, res)=>{
    try{
        const links = await (await Link.find({owner: req.auth.userId})).reverse();
        res.status(200).json({links})
    }catch(err){
        
        return res.status(500).json({message: 'Сервис не отвечает'})
    }
});
//Одна ссылка
router.get('/:id', async(req, res)=>{
    try{
        const links = await Link.findById(req.params.id);
        res.json({link});
    }catch(err){
        return res.status(500).json({message: 'Сервис не отвечает'})
    }
});

module.exports = router;