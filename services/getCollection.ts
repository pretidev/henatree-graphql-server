import { MongoClient } from "mongodb";

export default async <T extends any>(collection: string) => {
  const url = 'mongodb://localhost:27017';

  const db = MongoClient.connect(url, {
    useUnifiedTopology: true,
    auth: {
      user: 'root',
      password: '6ghf9863qdgsd7fgfgds67834ghds676273gge',
    }
  });

  const client = await db;

  return client.db('copaincopain').collection<T>(collection);
};