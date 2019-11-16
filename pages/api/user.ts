import { NextApiRequest, NextApiResponse } from "next";
import { User } from "entities";
import getCollection from "../../services/getCollection";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const collection = await getCollection<User>('user');
  const users: User[] = await collection.find({}).toArray();

  res.json(users);
}
