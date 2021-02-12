const {Router, json} = require('express');
const Link = require('../models/Link');
const router = Router();
const shortid = require('shortid');
const auth = require("../middlewares/auth.middleware");
const config = require("../config/default.json");

// generate link
router.post('/generate', auth, async(req, res)=>{
    try{
        const baseUrl = config.get('baseUrl');
        const {from} = req.body;
        const code = shortid.generate();
        const existing = await Link.findOne({from});
        if(existing) return res.json({link: existing});
        const to = baseUrl + '/t/' + code;
        const link = new Link({ code, to, from, owner:req.auth.userId});
        await link.save();
        res.status(201).json(link);
    }catch(err){
        return res.status(500).json({message: 'Сервис не отвечает'})
    }
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
        const links = await Link.find({owner: req.auth.id});
        res.status(200).json({links})
    }catch(err){
        
        return res.status(500).json({message: 'Сервис не отвечает'})
    }
});

router.get('/:id', async(req, res)=>{
    try{
        const links = await Link.findById(req.params.id);
        res.json({link});
    }catch(err){
        return res.status(500).json({message: 'Сервис не отвечает'})
    }
});

module.exports = router;