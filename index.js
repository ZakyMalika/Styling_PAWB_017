const express = require('express');
const path = require('path');
const cors = require('cors');
const application =  require('./src/app/routes/index')
require('dotenv').config()
const port = process.env.PORT;

const app = express();
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, "src/app/public")));

const corsOptions ={
    origin : '*',
    methods : ['GET'],
    allowHeaders: ['Content-Type']
}

app.use(cors(corsOptions));
app.use('/',application)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});