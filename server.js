const express = require('express');
const app = express();
const data = require('./sofa')

app.get('/',(req,res)=>{
    res.json(data);
})

app.listen(5000,()=>{
    console.log('Listening to port 5000');
})