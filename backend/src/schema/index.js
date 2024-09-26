const { mergeTypeDefs } = require("@graphql-tools/merge");
const userSchema = require("./userSchema");
const baseSchema = require("./baseSchema");

const typeDefs = mergeTypeDefs([baseSchema, userSchema]);

module.exports = typeDefs;
