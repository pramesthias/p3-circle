const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongo");

module.exports = class Post {
  // mengambil daftar post berdasarkan yang terbaru
  static async allPosts() {
    // return getDb().collection("Posts").find().toArray();

    return getDb()
      .collection("Posts")
      .aggregate([{ $sort: { createdAt: -1 } }])
      .toArray();
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
    post.createdAt = new Date().toDateString();
    post.updatedAt = new Date().toDateString();
    return getDb().collection("Posts").insertOne(post);
  }

  static async addComment(postId, comment) {
    comment.createdAt = new Date().toDateString();
    comment.updatedAt = new Date().toDateString();

    await getDb()
      .collection("Posts")
      .updateOne(
        { _id: new ObjectId(postId) },
        { $push: { comments: comment } }
      );

    // return comment;
    return await getDb()
      .collection("Posts")
      .findOne({ _id: new ObjectId(postId) });
  }

  // HANDLE LIKE
  static async addLike(postId, authorId) {
    const date = new Date().toDateString();

    await getDb()
      .collection("Posts")
      .updateOne(
        { _id: new ObjectId(postId) },
        {
          $addToSet: {
            likes: {
              authorId,
              createdAt: date,
              updatedAt: date,
            },
          },
        }
      );

    return await getDb()
      .collection("Posts")
      .findOne({ _id: new ObjectId(postId) });
  }
};
