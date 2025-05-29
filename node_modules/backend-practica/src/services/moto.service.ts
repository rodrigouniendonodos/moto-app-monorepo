import { Moto } from '../models/moto.model';  //interfaz que define la estructura de un objeto Moto
import * as fs from 'fs'; //modulo para leer y escribir archivos
import * as path from 'path'; //modulo para formar rutas correctas independientemente del sistema operativo

const dataPath = path.join(__dirname, '../data/motos.json');  //ruta al archivo JSON que contiene los datos de las motos

function readMotos(): Moto[] {
  const data = fs.readFileSync(dataPath, 'utf-8'); //lee el archivo JSON de forma síncrona
  return JSON.parse(data); //parses el contenido del archivo JSON a un array de objetos Moto
}

function writeMotos(motos: Moto[]) { //recibe un array de motos como parámetro
  fs.writeFileSync(dataPath, JSON.stringify(motos, null, 2), 'utf-8'); //escribe el array de motos de vuelta al archivo JSON, formateado con 2 espacios de indentación (mas legible)
} //si el archivo no existe, se creará automáticamente, si existe, se sobrescribirá

export const getAllMotos = (): Moto[] => readMotos(); //devuelve un array con todas las motos llamando al metodo readMotos()

export const getMotoById = (id: number): Moto | undefined =>
  readMotos().find(m => m.id === id);

export const addMoto = (moto: Moto): void => {
  const motos = readMotos();
  motos.push(moto);
  writeMotos(motos);
};

export const deleteMoto = (id: number): void => {
  let motos = readMotos();
  motos = motos.filter(m => m.id !== id);
  writeMotos(motos);
};