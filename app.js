const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors"); // set cors
const config  = require("config"); // set config
const PORT = config.get("port") || 5000;
app.use(cors());

//registration and login
app.use("/api/auth", require("./routers/auth.routes"));
app.use("/api/link", require("./routers/link.routers"));
// start server 
async function startMongo(){
    try{
        await mongoose.connect(config.get("mongodb"), {useUnifiedTopology:true, useCreateIndex: true, useNewUrlParser:true});
        app.listen(PORT, ()=>console.log(`SERVER START ON PORT ${PORT}`));
    }catch(err){
        console.log('server error '+ err.message );
        process.exit(1);
    }
}
startMongo();

