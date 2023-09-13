const express = require('express');
const app = express();

app.get('/',(req,res,next)=>{
    res.send({message:'Welcome to local host 5000'})
})

app.listen(5000,()=>{
    console.log('Listening on http://localhost:5000/')
})