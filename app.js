const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/validar',(req,res)=>{
    const idade = parseInt(req.body.idade);
    if (idade >= 18) {
        res.send("Você pode solicitar sua CNH");
        
    } else {
        res.send("Voê não poderá solicitar sua CNH");
    }
});

app.listen(3000,()=>{
    console.log("Server Iniciado");
})