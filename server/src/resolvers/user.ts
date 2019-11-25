import User, { IUser } from '../models/User';

export default {
  Query: {
    users: async () => await User.find(),
    user: async (_: any, { id }: { id: any }) => await User.findById(id),
  },
  Mutation: {
    createUser: async (_: any, { email, nickname, birthday }: IUser) => {
      const newUser = new User({
        email,
        nickname,
        birthday,
      });

      await newUser.save();

      return newUser;
    }
  }
}
