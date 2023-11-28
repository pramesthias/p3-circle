const { getDb } = require("../config/mongo"); //GLOBAL
const { ObjectId } = require("mongodb");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = class User {
  //

  // LOGIN & SEARCH
  static async findUsername(username) {
    return getDb().collection("Users").findOne({
      username: username,
    });
  }

  static async getUserById(id) {
    return getDb()
      .collection("Users")
      .findOne({ _id: new ObjectId(id) });
  }

  static async register(name, username, email, password) {
    if (password.length < 5) {
      throw new Error("Password should be at least 5 characters");
    }

    const users = getDb().collection("Users"); //GETTERS DB

    const isUname = await users.findOne({ username });
    if (isUname) {
      throw new Error("Username must be unique");
    }

    const isEmail = await users.findOne({ email });
    if (isEmail) {
      throw new Error("Email must be unique");
    }

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
      throw new Error("Invalid email format");
    }

    const hashedPwd = hashPassword(password);

    const addedUser = await users.insertOne({
      name,
      username,
      email,
      password: hashedPwd,
    });

    const newUser = await getDb()
      .collection("Users")
      .findOne({
        _id: new ObjectId(addedUser.insertedId),
      });

    return newUser;
  }
};
