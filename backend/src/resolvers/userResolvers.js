const User = require("../models/user");

const userResolver = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    user: async (_, { id }) => {
      const users = await User.findById(id);
      return users;
    },
  },
  Mutation: {
    addUser: async (_, { name, email }) => {
      const newUser = new User({ name, email });
      return await newUser.save();
    },
  },
};

module.exports = userResolver;
