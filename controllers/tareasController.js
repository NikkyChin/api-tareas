const obtenerTareas = (req, res) => {
  res.json([
    { id: 1, titulo: "Estudiar Git" },
    { id: 2, titulo: "Hacer API" },
    { id: 3, titulo: "Hacer pruebas" },
    { id: 4, titulo: "Hacer README" }
  ]);
};

module.exports = {
  obtenerTareas
};
