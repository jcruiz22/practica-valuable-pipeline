# Establecer la imagen base
FROM node:20

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias
# El asterisco (*) es usado para asegurar que tanto package.json como package-lock.json sean copiados
COPY package*.json ./
RUN npm install

# Copiar los archivos del proyecto
COPY . .

# Exponer el puerto que usa la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "src/server.mjs" ]
