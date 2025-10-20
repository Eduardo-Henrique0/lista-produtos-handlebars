const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();
const PORT = 3000;

const hbs = exphbs.create({
  extname: '.handlebars',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
