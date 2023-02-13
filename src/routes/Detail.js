import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [charcter, setCharcter] = useState([]);
  useEffect(() => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
    )
      .then((response) => response.json())
      .then((json) => {
        setCharcter(json.data.results);
        setLoading(false);
      });
  }, []);
  // console.log(charcter);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        charcter.map((char) => (
          <div key={char.id}>
            <h2>{char.name}</h2>
          </div>
        ))
      )}
    </div>
  );
}
