import { Request, Response } from 'express';  //ayudan a tipar los parámetros de entrada y salida
import * as motoService from '../services/moto.service';

/**
 * este archivo es un controlador en una arquitectura típica de Express.
 *  Se encarga de gestionar la lógica entre las rutas y el servicio de motos
 */

export const getMotos = (req: Request, res: Response) => {
  res.json(motoService.getAllMotos());
};

export const getMoto = (req: Request, res: Response): void => {
  const moto = motoService.getMotoById(Number(req.params.id));
  if (!moto) {
    res.status(404).json({ message: 'Moto no encontrada' });
    return;
  }
  res.json(moto);
};

export const createMoto = (req: Request, res: Response): void => {
  const { id, marca, modelo, cilindrada } = req.body;
  if (!id || !marca || !modelo || !cilindrada) {
    res.status(400).json({ message: 'Datos inválidos' });
    return;
  }
  motoService.addMoto({ id, marca, modelo, cilindrada });
  res.status(201).json({ message: 'Moto creada' });
};

export const deleteMoto = (req: Request, res: Response) => {
  motoService.deleteMoto(Number(req.params.id));
  res.status(204).send();
};