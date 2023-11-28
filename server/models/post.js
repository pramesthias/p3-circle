const { getDb } = require("../config/mongo");

module.exports = class Post {
  static async allPosts() {
    return getDb().collection("Posts").find().toArray();
  }

  static async getPostById(id) {
    return getDb()
      .collection("Posts")
      .findOne({ _id: new ObjectId(id) });
  }
};
