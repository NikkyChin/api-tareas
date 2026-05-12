const express = require('express');
const app = express();

const tareasRouter = require('./routers/tareasRouter');

app.use(express.json());

app.use('/', tareasRouter);

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});