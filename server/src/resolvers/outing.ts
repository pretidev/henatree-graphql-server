import Outing, { IOuting } from "../models/Outing";
import { GraphQLResolveInfo } from "graphql";
import { GraphQLRequestContext } from "apollo-server-core";

export default {
  Query: {
    outings: async () => await Outing.find(),
    outing: async (_: any, { id }: { id: any }) =>
      await Outing.findOne({ _id: id }).populate("author")
  },
  Mutation: {
    createOuting: async (
      _: any,
      { type, date, minGuests, maxGuests = 0, author }: IOuting
    ) => {
      const newUser = new Outing({
        type,
        date,
        minGuests,
        maxGuests,
        author
      });

      await newUser.save();

      return newUser;
    }
  }
};
