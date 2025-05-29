import { Router } from 'express';
import * as motoController from '../controllers/moto.controller';

const router = Router();
router.get('/prueba', (req, res) => {
  res.json({ mensaje: '¡Funciona!' });
});
router.get('/', motoController.getMotos);
router.get('/:id', motoController.getMoto);
router.post('/', motoController.createMoto);
router.delete('/:id', motoController.deleteMoto);


export default router;
