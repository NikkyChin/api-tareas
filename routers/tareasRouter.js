const express = require('express');
const router = express.Router();

// Importar los controladores de tareas
const {
  obtenerTareas,
  detalleTarea
} = require('../controllers/tareasController');

// Definir las rutas para las tareas
router.get('/tareas', obtenerTareas);
router.get('/tareas/:id', detalleTarea);

module.exports = router;