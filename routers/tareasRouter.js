const express = require('express');
const router = express.Router();

// Importar los controladores de tareas
const tareasController = require('../controllers/tareasController');

// Definir las rutas para las tareas
router.get('/tareas', tareasController.obtenerTareas);
router.get('/tareas/:id', tareasController.detalleTarea);
router.post('/tareas', tareasController.crearTarea);

module.exports = router;