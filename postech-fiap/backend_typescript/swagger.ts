import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuários, Disciplinas e Posts',
      version: '1.0.0',
      description: 'Documentação da API de Disciplinas e Usuários',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'ID do usuário',
            },
            name: {
              type: 'string',
              description: 'Nome do usuário',
            },
            email: {
              type: 'string',
              description: 'Email do usuário',
            },
            password: {
              type: 'string',
              description: 'Senha do usuário',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de criação do usuário',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de atualização do usuário',
            },
          },
        },
        Post: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'ID do post',
            },
            title: {
              type: 'string',
              description: 'Título do post',
            },
            description: {
              type: 'string',
              description: 'Descrição do post',
            },
            discipline: {
              type: 'array',
              items: {
                type: 'string',
                description: 'ID da disciplina',
              },
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de criação do post',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de atualização do post',
            },
          },
        },
        Discipline: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'ID do usuário',
            },
            title: {
              type: 'string',
              description: 'Nome da disciplina',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de criação do usuário',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'Data de atualização do usuário',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/disciplineRoutes.ts', './src/routes/userRoutes.ts', './src/routes/postRoutes.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Application) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
