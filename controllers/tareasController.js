// Controlador para manejar las tareas
// Importar el módulo de archivos para leer el archivo JSON
const fs = require("fs");

// Obtener todas las tareas
const obtenerTareas = (req, res) => {
  const data = fs.readFileSync("tareas.json", "utf8");

  const tareas = JSON.parse(data);

  res.json(tareas);
};

// Obtener detalle de una tarea por ID
const detalleTarea = (req, res ) => {
  const data = fs.readFileSync("tareas.json", "utf8");
  const tareas = JSON.parse(data);
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    res.json(tarea);
  } else {
    res.status(404).json({ mensaje: "Tarea no encontrada" });
  }
};

const crearTarea = (req, res) => {
  const data = fs.readFileSync("tareas.json", "utf8");
  const tareas = JSON.parse(data);
  const nuevaTarea = {
    id: tareas.length + 1,
    titulo: req.body.titulo,
    descripcion: req.body.descripcion
  };
  tareas.push(nuevaTarea);
  fs.writeFileSync("tareas.json", JSON.stringify(tareas));

  res.status(201).json(nuevaTarea);
};

module.exports = {
  obtenerTareas,
  detalleTarea,
  crearTarea
};
