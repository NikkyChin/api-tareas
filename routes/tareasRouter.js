const express = require('express');
const router = express.Router();

const {
  obtenerTareas,
} = require('../controllers/tareasController');

router.get('/tareas', obtenerTareas);

module.exports = router;