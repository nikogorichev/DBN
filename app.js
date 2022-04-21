const express = require('express');
const config = require('./config/config');
const mainRout = require('./routes/main.route');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRout);

app.listen(PORT, () => console.log(`8===э Server started at ${PORT} port ****`));
