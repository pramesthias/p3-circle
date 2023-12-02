const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const Follow = require("../models/follow");

const typeDefs = `#graphql

  type Follow {
    _id: ID
    followingId: ID
    followerId: ID   # follower: id kita, dari token
    createdAt: String
    updatedAt: String
  }

  # END POINT
  type Mutation {
    follow(followingId: ID): Follow 
  }
`;

const resolvers = {
  Mutation: {
    follow: async (_, args, contextValue) => {
      const user = await contextValue.authentication();
      try {
        // follower: id kita, dari token
        const { followingId } = args;
        const followerId = user.id;

        let newFollow = await Follow.follow(followingId, followerId);

        return newFollow;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
