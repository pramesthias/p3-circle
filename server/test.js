const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://okapramesthi:g56hfKkh3Hj1OISv@cluster0.qq00zgb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("Circle");
    const posts = database.collection("Posts");
    const post = await posts.find().toArray();

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
    await posts.updateOne({_id: new ObjectId}, {$push: {tags: "new"}})

    console.log(result);
  } catch (error){
    console.log(error)
  }
}
run().catch(console.dir);