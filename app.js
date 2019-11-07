require('dotenv').config();

const express = require('express');

const app = express();


const quotes = require('./controllers/quotecontroller');
const user = require('./controllers/usercotroller');

const sequelize = require('./db');
sequelize.sync();
app.use(express.json());
app.use(require('./middleware/headers'));  

app.use('/auth', user);

app.use('/quotes', quotes);

app.listen(process.env.PORT, () => console.log(`app is listening on ${process.env.PORT}`));
