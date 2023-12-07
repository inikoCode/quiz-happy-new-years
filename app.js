require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);

const indexRouter = require('./routes/index.route');

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`сервер запущен на ${PORT} порту`));
