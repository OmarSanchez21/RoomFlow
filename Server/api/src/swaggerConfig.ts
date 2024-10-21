import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation",
      version: "1.0.0",
      description: "Documentation for the API of my project",
    },
    servers: [
      {
        url: "http://localhost:5000", // Cambia al URL base de tu API
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Inventario: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "ID del inventario",
            },
            nombre: {
              type: "string",
              description: "Nombre del producto en el inventario",
            },
            cantidad: {
              type: "integer",
              description: "Cantidad del producto en stock",
            },
            precio: {
              type: "number",
              description: "Precio del producto",
              format: "float",
            },
            categoria: {
              type: "string",
              description: "Categoría del producto",
            },
            fechaIngreso: {
              type: "string",
              format: "date-time",
              description: "Fecha de ingreso del producto",
            },
          },
          required: ["nombre", "cantidad", "precio", "categoria"],
        },
      },
    },
  },
  apis: ["./src/routes/*.ts", "./src/controllers/*.ts"], // Cambia esto según la ruta donde tienes tus rutas
};


const swaggerSpec = swaggerJsDoc(swaggerOptions);

const setupSwagger = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
