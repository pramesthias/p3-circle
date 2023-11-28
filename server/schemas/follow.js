const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

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
    #follow
    follow(followingId: ID, followerId: ID, createdAt: String, updatedAt: String) : Follow
  }
`;

const resolvers = {
  Mutation: {


    follow: (_, args) => {
      const { followingId, followerId, createdAt, updatedAt } = args;
      let newFollow = { followingId: ID, followerId: ID, createdAt: String, updatedAt: String };
      Likes.push(newFollow);
      return newFollow;
    },
  },
};




module.exports = {typeDefs, resolvers}