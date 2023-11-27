const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `#graphql

  type Post {
    _id: ID
    content: String
    tags: String
    imgUrl: String
    authorId: ID
    comments: []
    likes: []
    createdAt: Date
    updatedAt: Date
  }


  # END POINT
  type Query {
    posts: [Post]
    postById(id: ID): Post

  }

  type Mutation {
    addPost(content: String, tags: String, imgUrl: String, 
    authorId: ID, comments: [], likes: [], createdAt: Date, updatedAt: Date): Post
    commentPost(content: String, authorId: ID, createdAt: Date, updatedAt: Date): Comment #comments?
    likePost(authorId: ID, createdAt: Date, updatedAt: Date): Like #likes?
  }
`;

const resolvers = {
  Query: {
    posts: () => {
      return Posts; // NO. 7 DAFTAR POSTS TERBARU => get post
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
        tags: String,
        imgUrl: String,
        authorId: ID,
        comments: [],
        likes: [],
        createdAt: Date,
        updatedAt: Date,
      };
      Posts.push(newPost);
      return newPost;
    },

    addComment: (_, args) => {
      const { content, authorId, createdAt, updatedAt } = args;
      let newComment = {
        content: String,
        authorId: ID,
        createdAt: Date,
        updatedAt: Date,
      };
      Comments.push(newComment);
      return newComment;
    },

    addLike: (_, args) => {
      const { authorId, createdAt, updatedAt } = args;
      let newLike = { authorId: ID, createdAt: Date, updatedAt: Date };
      Likes.push(newLike);
      return newLike;
    },
  },
};




module.exports = {typeDefs, resolvers}