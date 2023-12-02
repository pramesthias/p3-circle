const { GraphQLError } = require("graphql");
const { verifyToken } = require("../helpers/jwt");
const User = require("../models/user");
const { ObjectId } = require("mongodb");

const authentication = async (req) => {
  try {
    if (!req.headers.authorization) {
      throw new GraphQLError("Invalid token", {
        extensions: { code: "BAD_USER_INPUT" },
      });
    }

    const token = req.headers.authorization.split(" ")[1];

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
  } catch (error) {
    throw error;
  }
};

module.exports = { authentication };
