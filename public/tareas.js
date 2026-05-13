document.getElementById("crear-tarea-btn").addEventListener("click", async () => {

    const titulo =
        document.getElementById("titulo-input");

    const descripcion =
        document.getElementById("descripcion-input");

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

    titulo.value = "";
    descripcion.value = "";

    if (response.ok) {
        alert("Tarea creada exitosamente");
    } else {
        alert("Error al crear la tarea");
    }

});