const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `#graphql

  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: Date
    updatedAt: Date
  }

  # END POINT
  type Mutation {
    #follow
    follow(followingId: ID, followerId: ID, createdAt: Date, updatedAt: Date) = Follow
  }
`;

const resolvers = {
  Mutation: {


    follow: (_, args) => {
      const { followingId, followerId, createdAt, updatedAt } = args;
      let newFollow = { followingId: ID, followerId: ID, createdAt: Date, updatedAt: Date };
      Likes.push(newFollow);
      return newFollow;
    },
  },
};




module.exports = {typeDefs, resolvers}