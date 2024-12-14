const supertest = require('supertest');
const server = require('../index');

//configuracion
const api = supertest(server);

describe('GET /client/getName', () => {
  /*
    1.- Verificar el codigo de respuesta es 200
    2.- Verificar el formato es json
    3.- verificar si la respuesta tiene un array
    4.- verificar si cada objeto del array es un cliente
    */
  test('retornar array de clientes', async () => {
    // simular la peticion al servidor
    const response = await api.get('/client/getName?name=amparo');
    //código respuesta 200
    expect(response.status).toBe(200);

    expect(response.headers['content-type']).toMatch(/json/);

    expect(Array.isArray(response.body)).toBe(true);
  });
});
