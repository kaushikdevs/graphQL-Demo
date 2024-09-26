const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./userResolvers");

const resolvers = mergeResolvers([userResolvers]);

module.exports = resolvers;
