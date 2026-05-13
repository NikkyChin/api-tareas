// Controlador para manejar las tareas
const tareas = [
  { id: 1, titulo: "Estudiar Git", descripcion: "Aprender a usar Git para control de versiones" },
  { id: 2, titulo: "Hacer API", descripcion: "Crear endpoints para la API" },
  { id: 3, titulo: "Hacer pruebas", descripcion: "Escribir pruebas unitarias" },
  { id: 4, titulo: "Hacer README", descripcion: "Escribir documentación del proyecto" }
];

// Obtener todas las tareas
const obtenerTareas = (req, res) => {
  res.json(tareas);
};

// Obtener detalle de una tarea por ID
const detalleTarea = (req, res ) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ mensaje: "Tarea no encontrada" });
  }
};

module.exports = {
  obtenerTareas,
  detalleTarea
};
