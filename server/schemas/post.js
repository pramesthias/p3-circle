const { GraphQLError } = require("graphql");
const Post = require("../models/post");

const typeDefs = `#graphql

#representing returned data
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
    commentUsers: [User]
    likeUsers: [User]
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

type User {
    _id: ID
    name: String
    username: String
  }

  input newComment {
    content: String!
    # authorId: ID!
  }

  input newLike {
    authorId: ID!
  }

#represent the structure of data to be provided, not returned.
  input newPost { 
    content: String!
    tags: [String]
    imgUrl: String
    comments: [newComment]
    likes: [newLike]
    #authorId: ID!
  }

  # END POINT
  type Query {
    posts: [Post]
    postById(id: ID): Post
  }

  type Mutation {
    addPost(post: newPost): String # return String
    addComment(postId: String, content: String): Post
    addLike(postId: String): Post
  }
`;

const resolvers = {
  Query: {
    posts: async (_, __, contextValue) => {
      await contextValue.authentication();

      try {
        const posts = await Post.allPosts(); // authorId: user.id
        return posts;
      } catch (error) {
        throw error;
      }
    },

    postById: async (_, args, contextValue) => {
      await contextValue.authentication();

      try {
        const { id } = args;
        // const post = await Post.getPostById(id);
        const post = await Post.getPostIdName(id);

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
      } catch (error) {
        throw error;
      }
    },

    addComment: async (_, args, contextValue) => {
      const user = await contextValue.authentication();

      try {
        const { postId, content } = args;
        const authorId = user.id;
        const comment = { content, authorId };

        let newComment = await Post.addComment(postId, comment);
        return newComment;

        // const { postId } = args;
        // const { content } = args.comment;
        // const authorId = user.id;
        // const comment = { content, authorId };
        // let newComment = await Post.addComment(postId, comment);
        // return newComment;
      } catch (error) {
        throw error;
      }
    },

    addLike: async (_, args, contextValue) => {
      const user = await contextValue.authentication();
      try {
        const { postId } = args;
        const authorId = user.id;
        let newLike = await Post.addLike(postId, authorId);
        return newLike;

        // return "Succes Like Post";
        // const { postId } = args;
        // const { authorId } = args.like;
        // const userId = user.id;
        // let newLike = await Post.addLike(postId, authorId: userId);
        // return newLike;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { typeDefs, resolvers };
