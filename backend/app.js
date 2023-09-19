const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const residentRoutes = require('./routes/resident-routes');
const packageRoutes = require('./routes/resident-routes');
const googleSheetService = require('./googleSheetService');
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/api/residents',residentRoutes)
// app.use('/api/packages',packageRoutes)

// app.get('/',(req,res,next)=>{
//     res.send({message:'Welcome to local host 5000'})
// })

app.listen(5000,()=>{
    console.log('Listening on http://localhost:5000/')
})