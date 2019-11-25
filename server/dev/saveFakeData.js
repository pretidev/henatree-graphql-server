
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const db = MongoClient.connect(url, {
  useUnifiedTopology: true,
  auth: {
    user: 'root',
    password: '6ghf9863qdgsd7fgfgds67834ghds676273gge',
  }
});

db.then(client => {

  client.db('local').collection('users').insertMany([
    {
      nickname: 'sygma',
      email: 'k.dumont1994@gmail.com',
      birthday: '2001-01-01',
    },
    {
      nickname: 'gloria',
      email: 'gloluz@hotmail.fr',
      birthday: '2001-01-01',
    },
  ]);

  client.db('local').collection('outings').insertMany([
    {
      type: 'cinema',
      date: '2019-10-10 18:00:00',
      minGuests: 2,
      maxGuests: 4,
      author: {
        nickname: 'sygma',
        email: 'k.dumont1994@gmail.com',
        birthday: '2001-01-01',
      }
    },
    {
      type: 'restaurant',
      date: '2019-10-10 19:00:00',
      minGuests: 2,
      maxGuests: 4,
      author: {
        nickname: 'sygma',
        email: 'k.dumont1994@gmail.com',
        birthday: '2001-01-01',
      }
    },
    {
      type: 'dîner entre amis',
      date: '2019-10-10 20:00:00',
      minGuests: 2,
      maxGuests: 4,
      author: {
        nickname: 'sygma',
        email: 'k.dumont1994@gmail.com',
        birthday: '2001-01-01',
      }
    },
  ]);

  client.close();
});