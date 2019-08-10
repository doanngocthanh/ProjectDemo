var express = require('express');
var bodyparser =require('body-parser');
var app = express();

//them birds.js 
var birds = require('./controllers/birds');

app.use((req,res,next)=>{
    res.header("Access-control-allow-origin","*");
    res.header("Access-control-allow-header","origin, x-request-with, content-type, accept");
    res.header("Access-control-allow-methods","GET , POST , PATCH , PUT , DELETE , OPTIONALS");
    next();
})

app.use('/img',express.static(__dirname+'/data'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const {CustomerType,Customer}=require('./models/db')

//login
app.post('/login',(req,res)=>{
    console.log(req.body);
    console.log(req.query);
    res.send(req.body);
})


//lay file birds.js va su dung
app.use(birds);
var sever = app.listen(3000,()=>{
    var host = sever.address().address
    var port = sever.address().port
    console.log(" sever at run on http://%s:%s",host,port)
});
