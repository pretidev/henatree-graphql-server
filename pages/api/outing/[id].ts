import { NextApiRequest, NextApiResponse } from "next";

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

  const outing = {
    id: identifier,
    type: 'cinema',
    date: '2019-10-10 18:00:00',
    nbGuest: {
      min: 2,
      max: 4
    },
    author: {
      id,
      nickname: 'sygma',
      email: 'k.dumont1994@gmail.com',
      birthday: '2001-01-01',
    }
  };

  res.json(outing);
}
