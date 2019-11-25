import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    outings: [Outing!]!
    outing(id: String!): Outing!
  }
 
  extend type Mutation {
    createOuting(
      type: String!
      date: String!
      author: ID!,
      minGuests: Int!
      maxGuests: Int
    ): Outing!
  }

  type Outing {
    id: ID,
    type: String!
    date: String!
    minGuests: Int!
    maxGuests: Int!
    author: User!
  }
`; 