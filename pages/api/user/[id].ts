import { NextApiRequest, NextApiResponse } from "next";
import { User } from "entities";

const exists = (id: number) => {
  return true;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query: { id } } = req;
  const identifier = Number.parseInt(id as string);

  if (!exists(identifier)) {
    return res.json({
      error: "The id of th outing does not exist"
    });
  }

  const user: User = {
    id: identifier,
    nickname: 'sygma',
    email: 'k.dumont1994@gmail.com',
    birthday: '2001-01-01',
  };

  res.json(user);
}
