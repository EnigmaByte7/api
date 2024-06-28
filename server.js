const express = require('express');
const app = express();
const sofa= require('./sofa')

app.get('/products/sofa',(req,res)=>{
    res.json(sofa);
})

app.listen(5000,()=>{
    console.log('Listening to port 5000');
})