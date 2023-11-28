const { GraphQLError } = require("graphql");
const User = require("../models/user");
const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

const typeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String!
    email: String!
    password: String!
  }

type Token {
  accessToken: String
}

  # END POINT
  type Query {
    searchUser(username: String): User #[User] display all
    userById(id: ID): User
  }

  type Mutation {
    registerUser(name: String, username: String!, email: String!, password: String!): User    
    userLogin(username: String!, password: String!): Token  #email?
  }
`;

const resolvers = {
  Query: {
    // search by username
    searchUser: async (_, args) => {
      try {
        const { username } = args;
        const user = await User.findUsername(username); // 3 (SEARCH)

        if (!user) {
          throw new GraphQLError("User not found", {
            extensions: { code: "DATA_NOT_FOUND" },
          });
        }

        return user;
      } catch (error) {
        throw error;
      }
    },

    userById: async (_, args) => {
      try {
        const { id } = args;
        const user = await User.getUserById(id); // NO. 5 MENAMPILKAN PROFILE USER => get user

        if (!user) {
          throw new GraphQLError("User not found", {
            extensions: { code: "DATA_NOT_FOUND" },
          });
        }

        return user;
        // return Users.find((u) => u.id == args.id);
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    registerUser: async (_, args) => {
      try {
        const { name, username, email, password } = args;
        const newUser = User.register(name, username, email, password);
        return newUser;
      } catch (error) {
        throw error;
      }
    },

    userLogin: async (_, args) => {
      try {
        const { username, password } = args;
        const user = await User.findUsername(username);

        if (!user) {
          throw new GraphQLError("Invalid username/password", {
            extensions: { code: "BAD_USER_INPUT" },
          });
        }

        const validPwd = comparePassword(password, user.password);
        if (!validPwd) {
          throw new GraphQLError("Invalid username/password", {
            extensions: { code: "BAD_USER_INPUT" },
          });
        }

        const token = {
          accessToken: signToken({
            id: user._id,
            email: user.email,
            username: user.username,
          }),
        };

        return token;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
