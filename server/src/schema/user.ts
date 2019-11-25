import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]!
    user(id: String!): User
  }

  extend type Mutation {
    createUser(email: String!, nickname: String!, birthday: String!): User!
  }

  type User {
    id: ID!
    email: String!
    nickname: String!
    birthday: String!
  }
`; 