const { connect } = require("../config/mongo");


module.exports = class Post {

  static async allPosts() {
    const db = await connect();
    const posts = db.collection("Posts");
    const arrPosts = await posts.find().toArray();
    return arrPosts;
  }

};
