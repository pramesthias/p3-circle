const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    const database = client.db("Circle");
    db = database;
    return database;
  } catch (error) {
    console.log(error);
  }
}

function getDb() {
  return db;
}

module.exports = { connect, getDb };

// const posts = database.collection("Posts");
// const post = await posts.find().toArray();

// const user = await users.findOne({username: "", password: ""});
// const post = await posts.findOne({id: });
// const result = await posts.insertOne({
//   _id: ID,
//   content: String,
//   tags: String,
//   imgUrl: String,
//   authorId: ID,
//   comments: [],
//   likes: [],
//   createdAt: Date,
//   updatedAt: Date,
// })
// await posts.updateOne({_id: new ObjectId}, {$push: {tags: "new"}})

// console.log(result);
