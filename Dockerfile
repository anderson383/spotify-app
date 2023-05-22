# Construir la imagen a partir de la imagen base de Node.js
FROM node:16-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm ci --only=production

# Copiar los archivos de la aplicación al directorio de trabajo
COPY . .

# Construir la aplicación de Next.js
RUN npm run build

# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Definir el comando para iniciar la aplicación
CMD ["npm", "start"]