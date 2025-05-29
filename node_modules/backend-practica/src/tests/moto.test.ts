import request from 'supertest'; //supertest permite simular peticiones HTTP a tu servidor sin necesidad de arrancarlo manualmente.
import app from '../app';

describe('Rutas motos API', () => {  //Agrupa todos los tests relacionados con tu API de motos.
  it('GET /motos debe devolver un array', async () => { //it es una función que define un test individual.
    const res = await request(app).get('/motos'); //Hace una petición GET a /motos.
    expect(res.statusCode).toBe(200); //Verifica que la respuesta tenga código 200.
    expect(Array.isArray(res.body)).toBe(true); //Verifica que el cuerpo de la respuesta sea un array.
  });

  it('POST /motos debe crear una moto', async () => {
    const newMoto = {
      id: 999,
      marca: 'Honda',
      modelo: 'CBR600RR',
      cilindrada: 600,
    };
    const res = await request(app).post('/motos').send(newMoto);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Moto creada');
  });

  it('GET /motos/:id debe devolver la moto creada', async () => {
    const res = await request(app).get('/motos/999');
    expect(res.statusCode).toBe(200);
    expect(res.body.marca).toBe('Honda');
  });

  it('DELETE /motos/:id debe borrar la moto', async () => {
    const res = await request(app).delete('/motos/999');
    expect(res.statusCode).toBe(204);
  });
});
