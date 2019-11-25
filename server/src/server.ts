import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from "mongoose";

import typeDefs from './schema/';
import resolvers from './resolvers';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });

  await mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
      user: 'root',
      password: '6ghf9863qdgsd7fgfgds67834ghds676273gge',
    },
    useCreateIndex: true,
    dbName: 'local'
  });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀  Graphql is ready at URL at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer();
