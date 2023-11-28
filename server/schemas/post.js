const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const Post = require("../models/post")

const typeDefs = `#graphql

  type Post {
    _id: ID
    content: String!
    tags: [String]
    imgUrl: String
    authorId: ID!
    comments: [Comment]
    likes: [Like]
    createdAt: String
    updatedAt: String
  }

  type Comment {
  content: String!
  authorId: ID!
  createdAt: String
  updatedAt: String
}

type Like {
  authorId: ID!
  createdAt: String
  updatedAt: String
}

  # END POINT
  type Query {
    posts: [Post]
    postById(id: ID): Post
  }

  type Mutation {
    addPost(content: String, tags: String, imgUrl: String, authorId: ID, comments: String, likes: String, createdAt: String, updatedAt: String): Post
    addComment(content: String, authorId: ID, createdAt: String, updatedAt: String): Comment
    addLike(authorId: ID, createdAt: String, updatedAt: String): Like 
  }
`;

const resolvers = {
  Query: {
    posts: async () => {
      // const db = await connect();
      // const posts = db.collection("Posts");
      // const arrPosts = await posts.find().toArray();
      const arrPosts = await Post.allPosts()
      return arrPosts; // NO. 7 DAFTAR POSTS TERBARU => get post
    },
    postById: (_, args) => {
      return Posts.find((p) => p.id == args.id); // NO. 8 Get POST by ID
    },
  },

  Mutation: {
    addPost: (_, args) => {
      const {
        content,
        tags,
        imgUrl,
        authorId,
        comments,
        likes,
        createdAt,
        updatedAt,
      } = args;

      let newPost = {
        id: Posts.length + 1,
        content: String,
        tags: [String],
        imgUrl: String,
        authorId: ID,
        comments: [Comment],
        likes: [Like],
        createdAt: String,
        updatedAt: String,
      };

      Posts.push(newPost);
      return newPost;
    },

    addComment: (_, args) => {
      const { content, authorId, createdAt, updatedAt } = args;
      let newComment = {
        content: String,
        authorId: ID,
        createdAt: String,
        updatedAt: String,
      };
      Comments.push(newComment);
      return newComment;
    },

    addLike: (_, args) => {
      const { authorId, createdAt, updatedAt } = args;
      let newLike = { authorId: ID, createdAt: String, updatedAt: String };
      Likes.push(newLike);
      return newLike;
    },
  },
};

module.exports = { typeDefs, resolvers };
