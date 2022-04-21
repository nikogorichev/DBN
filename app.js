const express = require('express');
const config = require('./config/config');
const mainRout = require('./routes/main.route');
const themesRout = require('./routes/themes.route');
const questRout = require('./routes/question.route');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', mainRout);
app.use('/questions', themesRout);
app.use('/game', questRout);

app.listen(PORT, () => console.log(`8===э Server started at ${PORT} port ****`));
