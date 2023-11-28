const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongo");

module.exports = class Post {
  // NEWEST POST
  static async allPosts() {
    return getDb().collection("Posts").find().toArray();

    // mengambil daftar post berdasarkan yang terbaru
    // return getDb()
    //   .collection("Posts")
    //   .aggregate([{ $sort: { createdAt: -1 } }])
    //   .toArray();
  }

  static async getPostById(id) {
    return getDb()
      .collection("Posts")
      .findOne({ _id: new ObjectId(id) });
  }

  //  Menampilkan nama/username user pada data komentar
  static async getPostIdName(id) {
    return getDb()
      .collection("Posts")
      .aggregate([
        {
          $match: { _id: new ObjectId(id) },
        },
        {
          $lookup: {
            from: "Users",
            localField: "authorId",
            foreignField: "_id",
            as: "user",
          },
        },
      ]);
  }

  // MUTATION:
  static async addPost(post) {
    post.createdAt = new Date().toDateString(); // Wed 29 NOv 2023
    post.updatedAt = new Date();
    return getDb().collection("Posts").insertOne(post);
  }
};
