import request from 'supertest';
import { App } from "../src/server"

const { setup, teardown } = require('../src/test/setup.js');

// Setup and Teardown
beforeAll(async () => {
    await setup();
});
  
afterAll(async () => {
    await teardown();
});

const app = new App().getServer()

describe('===Testando userRoutes ===', () => {
  it('GetAllUsers (Get) deve retornar status 200 se devolver a lista de users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
  });
  it('GetAllUsers (Get) deve retornar status 404 para rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.status).toBe(404);
  });

  it('CreateUser (Post) deve retornar status 201 se user for criado', async () => {
    const object = {
      name: "Teste Acesso",
      email: "teste@gmail.com",
      password: "postech123",
      confirmPassword: "postech123"
    }
    const response = (await request(app).post('/users').send(object));
    expect(response.status).toBe(201);
  });

  it('UpdateUser (Put) deve retornar status 401 se não informado o token', async () => {
    const response = (await request(app).put('/users/1').send({
      name: "Teste User",
      email: "testeemail@gmail.com",
      password: "postech123",
      confirmPassword: "postech123"
    }));
    expect(response.status).toBe(401);
  });

  it('DeleteUser (Delete) deve retornar status 401 se não informado o token', async () => {
    const response = (await request(app).delete('/users/1'));
    expect(response.status).toBe(401);
  });
});