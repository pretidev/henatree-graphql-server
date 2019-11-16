import { NextApiRequest, NextApiResponse } from "next";
import { User } from "entities";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id } } = req;

  const users: User[] = [
    {
      id: 1,
      nickname: 'sygma',
      email: 'k.dumont1994@gmail.com'
    },
    {
      id: 2,
      nickname: 'gloria',
      email: 'gloluz@gmail.com'
    },
    {
      id: 3,
      nickname: 'nicko',
      email: 'nicko95678@hotmail.fr'
    },
  ];

  res.json(users);
}
