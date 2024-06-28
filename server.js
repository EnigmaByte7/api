const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.listen(()=>{
    console.log('Listening to port 5000');
})