import Head from 'next/head';
import React, { useState } from "react";
import axios from "axios";
import { Outing } from "entities";

const Home = () => {
  const [outings, setOutings] = useState<Outing[]>([]);

  axios.get<Outing[]>('/api/outing').then(({ data }) => setOutings(data));

  return (
    <div>
      <Head>
        <title>Les dernières sorties - copaincopain</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {outings.map(outing => (
        <div key={outing.id} className="outing">
          <div className="outing__type">
            {outing.type}
          </div>
          <div className="outing__guests">
            {`${outing.nbGuest.min}-${outing.nbGuest.max}`}
          </div>
          <div className="outing__nickname">
            {outing.author.nickname}
          </div>
        </div>

      ))}
      <style jsx>{`
        .outing {
          background: #f7f7f7;
          margin: 10px;
        }
      `}</style>
    </div>
  );
}

export default Home;