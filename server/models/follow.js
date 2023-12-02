const { ObjectId } = require("mongodb");
const { getDb } = require("../config/mongo");

module.exports = class Follow {
  static async follow(followingId, followerId) {
    const date = new Date().toDateString(); // .toISOString(); ???

    const follow = await getDb()
      .collection("Follows")
      .insertOne({
        followingId: new ObjectId(followingId),
        followerId,
        createdAt: date,
        updatedAt: date,
      });

    return await getDb()
      .collection("Follows")
      .findOne({ _id: new ObjectId(follow.insertedId) });
  }
};
