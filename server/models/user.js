const { getDb } = require("../config/mongo"); //GLOBAL
const { ObjectId } = require("mongodb");

module.exports = class User {

  static async register ( name, username, email, password ) {
    const users = getDb().collection("Users");  //GETTERS DB
    const addedUser = await users.insertOne({
      name, 
      username, 
      email, 
      password
    });

    const newUser = await db.collection("Users").findOne({
      _id: new ObjectId(addedUser.insertedId)
    })

    return newUser;
  }

}