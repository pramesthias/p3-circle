if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { connect } = require("./config/mongo");

const {
  typeDefs: userTypeDefs,
  resolvers: userResolvers,
} = require("./schemas/user");

const {
  typeDefs: postTypeDefs,
  resolvers: postResolvers,
} = require("./schemas/post");

const {
  typeDefs: followTypeDefs,
  resolvers: followResolvers,
} = require("./schemas/follow");

const { authentication } = require("./middlewares/authentication");

const server = new ApolloServer({
  typeDefs: [userTypeDefs, postTypeDefs, followTypeDefs],
  resolvers: [userResolvers, postResolvers, followResolvers],
});

connect()
  .then(() => {
    console.log("CONNECTED TO MONGODB");
    return startStandaloneServer(server, {
      listen: { port: 3000 },
      context: ({ req }) => {
        return {
          authentication: async () => {
            const accessToken = req.headers.authorization.split(" ")[1];
            try {
              return await authentication(accessToken);
            } catch (error) {
              throw error;
            }
          },
        };
      },
    });
  })
  .then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
  });
