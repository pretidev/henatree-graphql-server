import { NextApiRequest, NextApiResponse } from "next";
import { Outing } from "entities";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const outings: Outing[] = [
    {
      id: 1,
      type: 'cinema',
      date: '2019-10-10 18:00:00',
      nbGuest: {
        min: 2,
        max: 4
      },
      author: {
        id: 1,
        nickname: 'sygma',
        email: 'k.dumont1994@gmail.com',
        birthday: '2001-01-01',
      }
    },
    {
      id: 2,
      type: 'restaurant',
      date: '2019-10-10 19:00:00',
      nbGuest: {
        min: 2,
        max: 4
      },
      author: {
        id: 2,
        nickname: 'sygma',
        email: 'k.dumont1994@gmail.com',
        birthday: '2001-01-01',
      }
    },
    {
      id: 3,
      type: 'dîner entre amis',
      date: '2019-10-10 20:00:00',
      nbGuest: {
        min: 2,
        max: 10
      },
      author: {
        id: 3,
        nickname: 'sygma',
        email: 'k.dumont1994@gmail.com',
        birthday: '2001-01-01',
      }
    },
  ];

  res.json(outings);
}
