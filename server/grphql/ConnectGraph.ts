import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolver.js";
import { typeDefs } from "./typeDefs.js";
export const connectGraph = () => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  return apolloServer;
};
