var express = require('express');
var router = express.Router();

router.use(function timeLog(req,res,next){
    console.log('Time: ',Date.now());
    next();
})

router.get('/',(req,res)=>{
    res.send('bird home page');
})

router.get('/about',(req,res)=>{
    res.send('about birds');
})

router.get('/login',(req,res)=>{
    var result = [
    {user:'admin' ,pass:"123"},
    {user:'admin1' ,pass:"1234"},
]
    res.send(result);
})





module.exports = router;