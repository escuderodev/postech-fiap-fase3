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

describe('===Testando disciplineRoutes ===', () => {
  it('GetAllDisciplinies (Get) deve retornar status 200 se devolver a lista de disciplinas', async () => {
    const response = await request(app).get('/disciplinies');
    expect(response.status).toBe(200);
  });
  it('GetAllDisciplinies (Get) deve retornar status 404 para rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.status).toBe(404);
  });

  it('CreateDiscipline (Post) deve retornar status 401 se não informado o token', async () => {
    const object = {
      title: "Teste Post"
    }
    const response = (await request(app).post('/disciplinies').send(object));
    expect(response.status).toBe(401);
  });

  it('UpdateDiscipline (Put) deve retornar status 401 se não informado o token', async () => {
    const response = (await request(app).put('/disciplinies/1').send({
      title: "Teste de inserção de disciplina"
    }));
    expect(response.status).toBe(401);
  });

  it('DeleteDiscipline (Delete) deve retornar status 401 se não informado o token', async () => {
    const response = (await request(app).delete('/disciplinies/1'));
    expect(response.status).toBe(401);
  });
});