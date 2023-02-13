import React, { useEffect, useState } from 'react';
import styles from '../App.module.css';
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
  console.log(charcter.series);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        charcter.map((char) => (
          <div key={char.id}>
            <h2>{char.name}</h2>
            <div>
              <img
                className={styles.portrait}
                alt={char.name}
                src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              />
            </div>
            <div>
              <h2>Comic</h2>
              <ul>
                <li>{char.series.items[0].name}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
