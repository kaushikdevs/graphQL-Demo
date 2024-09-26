// src/ApolloClient.js
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // URL of your GraphQL server
  cache: new InMemoryCache(),
});

const ApolloProviderComponent = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { ApolloProviderComponent };
