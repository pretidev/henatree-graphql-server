import { NextApiRequest, NextApiResponse } from "next";
import { Outing } from "entities";
import getCollection from "../../../services/getCollection";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id } } = req;

  const collection = await getCollection<Outing>('outings');
  const outing: Outing | null = await collection.findOne({ _id: ObjectId(id) });

  if (!outing) {
    return res.json({
      error: "The id of the outing does not exist"
    });
  }

  res.json(outing);
}
