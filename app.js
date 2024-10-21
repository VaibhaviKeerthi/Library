const express = require('express');
const routes = require('./routes/routes') 
const cors = require('cors')
const app = express();
const port= 3008
let bodyParser = require('body-parser')
const cron = require('node-cron');
const returndate = require('./helpers/helper');

app.use(express.json());

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());
app.use(cors());

app.use('/',routes)
cron.schedule('0 0 * * *',returndate);
  
app.listen(port,()=>{
    console.log('Server listening on port 3008')
})
