#imagen oficial de Node.js
FROM node:22-alpine 

#establecemos el directorio de trabajo
WORKDIR /api-tareas

#copiamos los archivos de dependencias
COPY package*.json ./

#instalamos las dependencias
RUN npm install

#copiamos el resto de los archivos de la aplicación
COPY . .

#exponemos el puerto en el que la aplicación se ejecutará
EXPOSE 3000

#comando para ejecutar la aplicación
CMD ["node", "server.js"]