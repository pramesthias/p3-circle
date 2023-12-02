const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongo");

module.exports = class Post {
  // mengambil daftar post berdasarkan yang terbaru
  static async allPosts() {
    return getDb()
      .collection("Posts")
      .aggregate([
        { $sort: { createdAt: -1 } },
        {
          $lookup: {
            from: "Users",
            localField: "authorId",
            foreignField: "_id",
            as: "user",
          },
        },
        {
          $unwind: "$user",
        },
      ])
      .toArray();

    // return getDb().collection("Posts").find().toArray(); => find(query)
  }

  static async getPostById(id) {
    return getDb()
      .collection("Posts")
      .findOne({ _id: new ObjectId(id) });
  }

  //  Menampilkan nama/username user pada data komentar
  static async getPostIdName(id) {
    const post = await getDb()
      .collection("Posts")
      .aggregate([
        {
          $match: { _id: new ObjectId(id) },
        },
        {
          $lookup: {
            from: "Users",
            localField: "comments.authorId",
            foreignField: "_id",
            as: "commentUsers",
          },
        },
        {
          $lookup: {
            from: "Users",
            localField: "likes.authorId",
            foreignField: "_id",
            as: "likeUsers",
          },
        },
      ])
      .toArray();

    return post[0];

    // console.log(JSON.stringify(post[0], null, 2));
  }

  // MUTATION:
  static async addPost(post) {
    post.createdAt = new Date().toISOString(); // toDateString()
    post.updatedAt = new Date().toISOString(); // + .substring(0, 10) / split("T")[0]
    post.comments = [];
    post.likes = [];
    post.commentUsers = [];
    post.likeUsers = [];

    const newPost = await getDb().collection("Posts").insertOne(post);

    return await getDb()
      .collection("Posts")
      .findOne({ _id: new ObjectId(newPost.insertedId) });
  }

  // HANDLE ADD COMMENT
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
