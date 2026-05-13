document.getElementById("crear-tarea-btn").addEventListener("click", async () => {

    const titulo =
        document.getElementById("titulo-input");

    const descripcion =
        document.getElementById("descripcion-input");
    //dispara el metodo post con las cabeceras correspondientes y el cuerpo con los datos de la tarea
    const response = await fetch("/tareas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo.value,
            descripcion: descripcion.value
        })
    });
    //se limpian los imputs
    titulo.value = "";
    descripcion.value = "";
    //verifica si la respuesta del fetch fue exitosa y muestra un mensaje al usuario
    if (response.ok) {
        alert("Tarea creada exitosamente");
    } else {
        alert("Error al crear la tarea");
    }

});