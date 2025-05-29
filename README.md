# Monorepo - Proyecto Backend y Frontend

## Requisitos

- Node.js
- npm

## Instalación

1. Instala las dependencias del backend:
   ```sh
   cd bakend
   npm install
   ```

2. Instala las dependencias del frontend:
   ```sh
   cd ../frontend
   npm install
   ```

## Uso

### Backend

1. Desde la carpeta `bakend`:
   ```sh
   npm start
   ```
   o, si tienes un script de desarrollo:
   ```sh
   npm run dev
   ```
   El backend se ejecutará en [http://localhost:8080](http://localhost:8080) (o el puerto que tengas configurado).

### Frontend

1. Desde la carpeta `frontend`:
   ```sh
   npm start
   ```
   o (si usas Vite):
   ```sh
   npm run dev
   ```
   El frontend se ejecutará en [http://localhost:3000](http://localhost:3000) o [http://localhost:5173](http://localhost:5173).

## Notas

- Los datos de las motos se guardan en `src/data/motos.json`.
- Si tienes problemas, revisa la consola del navegador y la terminal.
- Al iniciar ambos, con npm start (tanto el back como el front) debería salir la lista de motos con la opción de añadir y eliminar.