import { ApolloServer } from 'apollo-server-micro';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs.graphqls';
import resolvers from './resolvers';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default new ApolloServer({
  schema,
  resolvers,
  context: (request) => {
    return {
      request,
      prisma,
    };
  },
}).createHandler({
  path: '/api',
});
