const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
 
const {typeDefs: userTypeDefs, resolvers: userResolvers} = require("./schemas/user")
const {typeDefs: postTypeDefs, resolvers: postResolvers} = require("./schemas/post")
const {typeDefs: followTypeDefs, resolvers: followResolvers} = require("./schemas/follow")

const server = new ApolloServer({
  typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
  resolvers: [userResolvers, postResolvers, followResolvers],
});

startStandaloneServer(server, {
  listen: { port: 3000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
