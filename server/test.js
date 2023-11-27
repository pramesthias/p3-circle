const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://okapramesthi:g56hfKkh3Hj1OISv@cluster0.qq00zgb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db("Circle");
    const posts = database.collection("Posts");
    const result = await posts.find().toArray();
    console.log(result);
  } catch (error){
    console.log(error)
  }
}
run().catch(console.dir);