import { NextApiRequest, NextApiResponse } from "next";
import { User } from "entities";
import getCollection from "../../../services/getCollection";
import { ObjectId } from "bson";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id } } = req;

  const collection = await getCollection<User>('users');
  const user: User = await collection.findOne({ _id: (new ObjectId(id as string)) });

  if (!user) {
    return res.json({
      error: "The id of the user does not exist"
    });
  }

  res.json(user);
}
