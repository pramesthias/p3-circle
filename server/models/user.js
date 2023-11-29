const { getDb } = require("../config/mongo"); //GLOBAL
const { ObjectId } = require("mongodb");
const { hashPassword } = require("../helpers/bcrypt");

module.exports = class User {
  // LOGIN
  static async findUsername(username) {
    return await getDb().collection("Users").findOne({
      username: username,
    });
  }

  // SEARCH
  static async searchUsername(username) {
    return await getDb()
      .collection("Users")
      .find({ username: { $regex: username, $options: "i" } })
      .toArray();
  }

  static async getUserById(id) {
    return getDb()
      .collection("Users")
      .findOne({ _id: new ObjectId(id) });
  }

  //Menampilkan nama/username following/followers
  static async getUserIdName(id) {
    const user = await getDb()
      .collection("Users")
      .aggregate([
        {
          $match: { _id: new ObjectId(id) },
        },
        {
          $lookup: {
            from: "Follows",
            localField: "_id",
            foreignField: "followingId",
            as: "followers",
          },
        },
        {
          $lookup: {
            from: "Follows",
            localField: "_id",
            foreignField: "followerId",
            as: "following",
          },
        },
        {
          $lookup: {
            from: "Users",
            localField: "followers.followerId", //"followers.followingId"
            foreignField: "_id",
            as: "followersName",
          },
        },
        {
          $lookup: {
            from: "Users",
            localField: "following.followingId",
            foreignField: "_id",
            as: "followingName",
          },
        },
      ])
      .toArray();

    // console.log(JSON.stringify(user[0], null, 2));

    return user[0];
  }

  // VALIDATION
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
