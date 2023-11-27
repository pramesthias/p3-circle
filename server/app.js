const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = `#graphql
  type User {
    _id: ID
    name: String
    username: String
    email: String
    password: String
  }

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

  type Follow {
    _id: ID
    followingId: ID
    followerId: ID
    createdAt: Date
    updatedAt: Date
  }

  # END POINT
  type Query {
    userLogin(username: String, password: String): User
    # searchUsers(username): [User]
    userById(id: ID): User
    posts: [Post]
    postById(id: ID): Post

  }

  type Mutation {
    addUser(name: String, username: String, email: String, password: String): User
    addPost(content: String, tags: String, imgUrl: String, 
    authorId: ID, comments: [], likes: [], createdAt: Date, updatedAt: Date): Post
    commentPost(content: String, authorId: ID, createdAt: Date, updatedAt: Date): Comment #comments?
    #follow
    likePost(authorId: ID, createdAt: Date, updatedAt: Date): Like #likes?
  }
`;


const resolvers = {
  Query: {
    userLogin: (_, { username, password }) => {
      return Users.find(
        (u) => u.username === username && u.password === password); // 2 (UNAME/PWD) => login
    },
    // searchUsers: (_, { username }) => {
    //   return Users.find((u) => u.username === username); // 3 (SEARCH)
    // },
    userById: (_, args) => {
      return Users.find((u) => u.id == args.id); // NO. 5 MENAMPILKAN PROFILE USER => get user
    },

    posts: () => {
      return Posts; // NO. 7 DAFTAR POSTS TERBARU => get post
    },
    postById: (_, args) => {
      return Posts.find((p) => p.id == args.id); // NO. 8 Get POST by ID
    },
  },

  Mutation: {
      addUser: (_, args) => {
        const {name, username, email, password} = args;
        let newUser = {id: Users.length + 1, name: String, username: String, email: String, password: String}
        Users.push(newUser);
        return newUser
      },
      addPost: (_, args) => {
        const {content, tags, imgUrl, authorId, comments, likes, createdAt, updatedAt} = args;
        let newPost = {id: Posts.length + 1, content: String, tags: String, imgUrl: String, 
          authorId: ID, comments: [], likes: [], createdAt: Date, updatedAt: Date}
        Posts.push(newPost);
        return newPost;
        },

      addComment: (_, args) => {
        const {content, authorId, createdAt, updatedAt} = args;
        let newComment = {content: String, authorId: ID, createdAt: Date, updatedAt: Date}
        Comments.push(newComment);
        return newComment;
      },

      addLike: (_, args) => {
        const {authorId, createdAt, updatedAt} = args;
        let newLike = {authorId: ID, createdAt: Date, updatedAt: Date}
        Likes.push(newLike);
        return newLike;
      },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, {
  listen: { port: 3000 },
}).then(({ url }) => {
  console.log(`🚀  Server ready at: ${url}`);
});
