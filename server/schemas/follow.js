const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const Follow = require("../models/follow");

const typeDefs = `#graphql

  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: String
    updatedAt: String
  }

  # END POINT
  type Mutation {
    follow(followingId: ID, followerId: ID) : Follow # return Follow?
  }
`;

const resolvers = {
  Mutation: {
    follow: async (_, args) => {
      try {
        const { followingId, followerId } = args;
        let newFollow = await Follow.follow(followingId, followerId);
        return newFollow;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
