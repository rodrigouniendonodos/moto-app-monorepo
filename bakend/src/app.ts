import express from 'express';
import cors from 'cors';
import motoRoutes from './routes/moto.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Aquí usamos el router:
app.use('/motos', motoRoutes);

export default app;
