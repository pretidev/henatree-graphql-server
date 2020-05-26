import { gql } from "apollo-server-core";

import userSchema from "./user";
import outingSchema from "./outings";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, outingSchema];