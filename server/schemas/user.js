const { GraphQLError } = require("graphql");
const User = require("../models/user");

const typeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String
  }

  # END POINT
  type Query {
    userLogin(username: String, password: String): User
    # searchUsers(username): [User]
    userById(id: ID): User
  }

  type Mutation {
    addUser(name: String, username: String, email: String, password: String): User    
  }
`;

const resolvers = {
  Query: {
    userLogin: (_, { username, password }) => {
      return Users.find(
        (u) => u.username === username && u.password === password
      ); // 2 (UNAME/PWD) => login
    },
    // searchUsers: (_, { username }) => {
    //   return Users.find((u) => u.username === username); // 3 (SEARCH)
    // },
    userById: (_, args) => {
      const user = Users.find((u) => u.id == args.id); // NO. 5 MENAMPILKAN PROFILE USER => get user

      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "DATA_NOT_FOUND" },
        });
      }
      return Users.find((u) => u.id == args.id);
    },
  },

  Mutation: {
    addUser: async (_, args) => {
    const { name, username, email, password } = args;
    const newUser = User.register( name, username, email, password )

    return newUser;
    },
  },
};

module.exports = { typeDefs, resolvers };
