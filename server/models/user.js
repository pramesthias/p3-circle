const { getDb } = require("../config/mongo"); //GLOBAL
const { ObjectId } = require("mongodb");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = class User {
  static async findUsername(username) {
    return getDb().collection("Users").findOne({
      username: username,
    });
  }

  static async register(name, username, email, password) {
    const hashedPwd = hashPassword(password);
    const users = getDb().collection("Users"); //GETTERS DB
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

  static async getUserById(id) {
    const users = getDb().collection("Users");
    const user = await users.findOne({ _id: new ObjectId(id) });

    return user;
  }
};
