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

describe('===Testando postRoutes ===', () => {
  it('GetAllPosts (Get) deve retornar status 200 se devolver a lista de posts', async () => {
    const response = await request(app).get('/posts');
    expect(response.status).toBe(200);
  });
  it('GetAllPosts (Get) deve retornar status 404 para rota inexistente', async () => {
    const response = await request(app).get('/rota-inexistente');
    expect(response.status).toBe(404);
  });

  it('CreatePost (Post) deve retornar status 401 se não informado o token', async () => {
    const object = {
      title: "Título do Post",
      description: "Descrição do Post",
      discipline: {
          id: "669af920b087d5b9c9bf01e7"
      }
    }
    const response = (await request(app).post('/posts').send(object));
    expect(response.status).toBe(401);
  });

  it('UpdatePost (Put) deve retornar status 401 se não informado o token', async () => {
    const response = (await request(app).put('/posts/1').send({
      title: "Teste de inserção de disciplina"
    }));
    expect(response.status).toBe(401);
  });

  it('DeletePost (Delete) deve retornar status 401 se não informado o token', async () => {
    const response = (await request(app).delete('/posts/1'));
    expect(response.status).toBe(401);
  });
});