const { ObjectId } = require("mongodb");
const { getDB } = require("./db");

module.exports = {
  Query: {
    getPosts: async () => {
      const collection = getDB().collection("posts");
      return await collection.find().toArray();
    },
    getPost: async (_, { id }) => {
      const collection = getDB().collection("posts");
      return await collection.findOne({ _id: new ObjectId(id) });
    },
  },

  Mutation: {
    createPost: async (_, { title, content, author }) => {
      const collection = getDB().collection("posts");
      const result = await collection.insertOne({ title, content, author });

      // Check and return inserted post
      return {
        _id: result.insertedId,
        title,
        content,
        author,
      };
    },
  },
};
