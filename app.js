require('@babel/register');
const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(ssr);

const indexRoutes = require('./routes/index.routes');

app.use('/', indexRoutes);

app.listen(PORT, () => console.log(`сервер запущен на ${PORT} порту`));
