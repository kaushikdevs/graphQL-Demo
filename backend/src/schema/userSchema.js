const { gql } = require("apollo-server-express");

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  extend type Query {
    users: [User]
    user(id: ID!): User
  }
  extend type Mutation {
    addUser(name: String!, email: String!): User
  }
`;

module.exports = userSchema;
