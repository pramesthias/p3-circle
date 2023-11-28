const { getDb } = require("../config/mongo");

module.exports = class Post {
  static async allPosts() {
    return getDb().collection("Posts").find().toArray();
    // const db = await connect();
    // const posts = db.collection("Posts");
    // const arrPosts = await posts.find().toArray();
  }
};
