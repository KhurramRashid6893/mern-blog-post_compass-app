const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type BlogPost {
    _id: ID!
    title: String!
    content: String!
    author: String!
  }

  type Query {
    getPosts: [BlogPost]
    getPost(id: ID!): BlogPost
  }

  type Mutation {
    createPost(title: String!, content: String!, author: String!): BlogPost
  }
`;

module.exports = typeDefs;
