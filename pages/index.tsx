import Head from 'next/head';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outing } from "entities";

const Home = () => {
  const [outings, setOutings] = useState<Outing[]>([]);

  useEffect(
    () => {
      axios.get<Outing[]>('/api/outing').then(({ data }) => setOutings(data));
    },
    []
  );

  return (
    <div>
      <Head>
        <title>Les dernières sorties - copaincopain</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {outings.map(outing => (
        <div key={outing._id} className="outing">
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