const { getDb } = require("../config/mongo");

module.exports = class Follow {
  static async follow(followingId, followerId) {
    const date = new Date(); // .toISOString(); ???

    return await getDb().collection("Follows").insertOne({
      followingId,
      followerId,
      createdAt: date,
      updatedAt: date,
    });

    // RETURN : Follow
    // const newFollow = await getDb()
    //       .collection("Follows")
    //       .findOne({ _id: new ObjectId(follow.insertedId) });
  }
};
