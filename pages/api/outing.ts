import { NextApiRequest, NextApiResponse } from "next";
import { Outing } from "entities";
import getCollection from "../../services/getCollection";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const outingsCollection = await getCollection<Outing>('outings');
  const outings: Outing[] = await outingsCollection.find({}).toArray();

  res.json(outings);
}
