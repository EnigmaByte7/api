const express = require('express');
const app = express();
const cors = require('cors')
const sofa = require('./sofa')
const chair = require('./chair')
const table = require('./table')
const bed = require('./bed')
const shelf = require('./shelf')

app.use(cors());

app.get('/products/sofa',(req,res)=>{
    res.json(sofa);
})
app.get('/products/chair',(req,res)=>{
    res.json(chair);
})
app.get('/products/bed',(req,res)=>{
    res.json(bed);
})
app.get('/products/shelf',(req,res)=>{
    res.json(shelf);
})
app.get('/products/table',(req,res)=>{
    res.json(table);
})
app.listen(5000,()=>{
    console.log('Listening to port 5000');
})