import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User!]!
    user(id: String!): User
  }

  extend type Mutation {
    createUser(
      phone: String!
      nickname: String!
      birthday: String!
      password: String!
    ): User!
  }

  type User {
    id: ID!
    phone: String!
    nickname: String!
    birthday: String!
    password: String!
  }
`;
