const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const mongoose = require("mongoose");

const typeDefs = require("./schema/index");
const resolvers = require("./resolvers/index");

const app = express();

// connect mongoDB
mongoose
  .connect("mongodb://localhost:27017/graphql")
  .then((response) => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start the Apollo Server
  await server.start();

  // Apply the Apollo middleware to Express after the server starts
  server.applyMiddleware({ app });

  // Start the Express server
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server running at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startApolloServer();
