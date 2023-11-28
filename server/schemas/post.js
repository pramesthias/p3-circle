const Post = require("../models/post");
// const { authentication } = require("./middlewares/authentication"); // never read?

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
    # user: [User]
}

  type Like {
    authorId: ID!
    createdAt: String
    updatedAt: String
}

# type User {
#     _id: ID
#     name: String
#     username: String!
#     email: String!
#     password: String!
#   }

  # END POINT
  type Query {
    posts: [Post]
    postById(id: ID): Post
  }

  input newComment {
  content: String!
  authorId: ID!
}

input newLike {
  authorId: ID!
}

  input newPost {
    content: String!
    tags: [String]
    imgUrl: String
    #authorId: ID!
    comments: [newComment]
    likes: [newLike]
  }

  type Mutation {
    addPost(post: newPost): String #WAIT => return String
    addComment(content: String, authorId: ID): Comment
    addLike(authorId: ID): Like
  }
`;

const resolvers = {
  Query: {
    posts: async (_, __, contextValue) => {
      await contextValue.authentication(); // mati ?

      try {
        const posts = await Post.allPosts(); // authorId: user.id
        return posts;
      } catch (error) {
        throw error;
      }
    },

    postById: async (_, args, contextValue) => {
      // return Posts.find((p) => p.id == args.id); // NO. 8 Get POST by ID

      await contextValue.authentication();

      try {
        const { id } = args;
        const post = await Post.getPostById(id);

        if (!post) {
          throw new GraphQLError("Post not found", {
            extensions: { code: "DATA_NOT_FOUND" },
          });
        }

        return post;
      } catch (error) {
        throw error;
      }
    },
  },

  Mutation: {
    addPost: async (_, args, contextValue) => {
      const user = await contextValue.authentication();

      try {
        const { content, tags, imgUrl, comments, likes } = args.post;
        const authorId = user.id;

        await Post.addPost({
          content,
          tags,
          imgUrl,
          comments,
          likes,
          authorId,
        });

        return "Success add New Post";
      } catch (error) {}
    },

    addComment: async (_, args, contextValue) => {
      const user = await contextValue.authentication();
      const { content, authorId } = args;
      let newComment = {
        content,
        authorId,
      };
      Comments.push(newComment);
      return newComment;
    },

    addLike: (_, args) => {
      const { authorId, createdAt, updatedAt } = args;
      let newLike = { authorId };
      Likes.push(newLike);
      return newLike;
    },
  },
};

module.exports = { typeDefs, resolvers };
