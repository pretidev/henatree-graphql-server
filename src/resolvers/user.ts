import User, { IUser } from "../models/User";
import sha256 from "crypto-js/sha256";

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_: any, { id }: { id: any }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (
      _: any,
      { phone, nickname, birthday, password }: IUser
    ) => {
      try {
        const newUser = new User({
          phone,
          nickname,
          birthday,
          password: sha256(password),
        });

        await newUser.save();

        return newUser;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
