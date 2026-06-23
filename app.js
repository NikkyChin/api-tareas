const express = require('express');
const app = express();

const tareasRouter = require('./routers/tareasRouter');

app.use(express.json());
app.use(express.static("public"));
app.use('/', tareasRouter);

// motor de vistas
app.set('view engine', 'pug');

// rutas de donde sirve las vistas
app.set('views', [__dirname + '/public']);

app.get('/', (req, res) => {
  res.render("tareas");
});

module.exports = app;