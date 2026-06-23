const request = require('supertest');
const app = require('../app');

describe('API Tareas', () => {
    
  // Test para obtener todas las tareas
  test('GET /tareas devuelve todas las tareas', async () => {
    const response = await request(app).get('/tareas');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test para obtener una tarea por ID
  test('GET /tareas/1 devuelve una tarea', async () => {
    const response = await request(app).get('/tareas/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe(1);
  });

});