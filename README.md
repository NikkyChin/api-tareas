API de Gestión de Tareas

Este proyecto consiste en una API REST básica construida con Node.js y Express para administrar un listado de tareas.

Guía de Inicialización

Opción A: Si ya existe el repositorio en GitHub (Clonar proyecto)

Sigue estos pasos en tu terminal para descargar el entorno:

1. Clonar el repositorio con todas sus ramas:
    - git clone <URL_DE_GITHUB_DE_TU_REPOSITORIO>
    - cd api-tareas

2. Instalar las dependencias del proyecto:
    Este comando leerá el archivo 'package.json' e instalará automáticamente Express:
    - npm install

3. Iniciar el servidor local:
    - node app.js
Opción B: inicializar el proyecto desde 0 Establecer la primera línea base inicial, ejecuta estos comandos en una carpeta vacía donde ira el proyecto

1. Crear la carpeta e inicializar Node.js:
    - mkdir api-tareas
    - cd api-tareas
    - npm init -y

2. Instalar Express Framework:
    - npm install express

3. Crear la estructura del proyecto e ignorar archivos basura:
    - touch app.js README.md .gitignore
    - mkdir routes controllers
    - touch routes/tareasRouter.js controllers/tareasController.js
    - echo "node_modules/" >> .gitignore

4. Vincular e inicializar con GitHub (Línea base inicial):
    - git init
    - git add .
    - git commit -m "Establecer linea base inicial del proyecto con Express"
    - git branch -M main
    - git remote add origin <URL_DE_TU_REPOSITORIO_DE_GITHUB>
    - git push -u origin main
Flujo de Trabajo para Crear una Nueva Feature

Para mantener el orden del proyecto, se debe seguir estos pasos exactos al desarrollar una nueva característica:

1. Sincronizar tu entorno local con el servidor remoto:
    - git checkout main
    - git pull origin main

2. Crear una rama propia partiendo de 'main' o como hallamos llamado a nuestra rama principal:
    - git checkout -b feature-eliminar-tarea

3. Escribir código y realizar commits progresivos:
    Realiza cambios en las carpetas routes/ y controllers/ y docúmentalos:
        - git add .
        - git commit -m "Implementar endpoint DELETE /tareas/:id para borrar tareas"

4. Subir tu rama de trabajo a GitHub:
    - git push origin feature-eliminar-tarea

5. Integrar los cambios a la rama principal:
    Vuelve a la rama principal, fusiona tu rama local y actualiza el servidor remoto:
        - git checkout main
        - git merge feature-eliminar-tarea
        - git push origin main

FUNCIONAMIENTO DE LA API

La funcion principal de la api es consultar las tareas a realizar para llevar a cabo el trabajo practico "API de gestion de tareas"

la informacion esta almacenada de manera local en un archivo formato json con los siguientes pares clave:valor

/tareas.js
    "id": numerico
    "titulo": texto
    "descripcion" : texto

La api cuenta con 2 ENDPOINTS

/tareas -> devuelve el listado completo de las tareas en formato json
/tareas/:id -> devuelve la tarea con el id indicado en la url en formato json

La api cuenta con una funcion POST para agregar tareas

accediendo a la raiz de la app ('/') tendremos acceso a dos campos para poder completar la informacion correspondiente a la tarea la cual sera salvada en el archivo tareas.js
