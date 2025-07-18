import Fastify from "fastify";
import cors from "@fastify/cors";

import fastifyStatic from "@fastify/static";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import path from "path";
import routes from "./routes";
import { initializeDb } from "./utils/db";
import config from "./config";
import mercurius from "mercurius";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import MercuriusGQLUpload from "mercurius-upload";
import fastifyMultipart from "@fastify/multipart";

async function start() {
  try {
    console.log(`Starting server in ${config.server.env} mode`);

    await initializeDb();

    const fastify = Fastify({
      logger: {
        level: config.logger.level,
        transport: config.isDevelopment
          ? {
              target: "pino-pretty",
              options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
              },
            }
          : undefined,
      },
    });

    // Register plugins
    await fastify.register(cors, {
      origin: ["http://localhost:3000", "http://localhost:4173"],
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    });

    // Serve static files (uploads)
    await fastify.register(fastifyStatic, {
      root: config.storage.uploadsDir,
      prefix: "/api/files/",
      decorateReply: false,
    });

    // Register Swagger
    await fastify.register(swagger, {
      openapi: {
        info: {
          title: "Music Tracks API",
          description: "API for managing music tracks",
          version: "1.0.0",
        },
      },
    });

    // Register Swagger UI
    await fastify.register(swaggerUi, {
      routePrefix: "/documentation",
      uiConfig: {
        docExpansion: "list",
        deepLinking: true,
      },
    });

    // await fastify.register(fastifyMultipart, {
    //    limits: {
    //       fileSize: 100000000, // 100MB
    //    },
    // });

    // Register mercurius-upload AFTER mercurius (it handles multipart internally)
    await fastify.register(MercuriusGQLUpload, {
      maxFileSize: 10 * 1024 * 1024, // 10MB
      maxFiles: 1,
    });

    // Register GraphQL (Mercurius)
    await fastify.register(mercurius, {
      schema: typeDefs,
      resolvers,
      graphiql: true,
      path: "/graphql",
      context: (request, reply) => ({ request, reply }),
    });

    // Register routes
    await fastify.register(routes);

    // Start server
    await fastify.listen({
      port: config.server.port,
      host: config.server.host,
    });

    console.log(
      `Server is running on http://${config.server.host}:${config.server.port}`,
    );
    console.log(
      `Swagger documentation available on http://${config.server.host}:${config.server.port}/documentation`,
    );
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

start();
