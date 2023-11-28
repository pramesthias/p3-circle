const { GraphQLError } = require("graphql");
const { verifyToken } = require("../helpers/jwt");
const User = require("../models/user");
const { ObjectId } = require("mongodb");

const authentication = async (token) => {
  const decoded = verifyToken(token);

  const user = await User.getUserById(decoded.id);

  if (!user) {
    throw new GraphQLError("Invalid token", {
      extensions: { code: "BAD_USER_INPUT" },
    });
  }

  return {
    id: new ObjectId(decoded.id),
    email: decoded.email,
  };
};

module.exports = { authentication };
