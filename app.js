const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/db');


const app = express();

//Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//connect database
connectDb();


app.use(express.json({extended: false}));
app.get('/', (req,res) => res.send('Hello world'))



//port
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running successfully on port ${port}`));