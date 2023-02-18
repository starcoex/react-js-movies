import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail';

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [charcter, setCharcter] = useState([]);
  const fetchUrl = `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`;
  useEffect(() => {
    const getDetail = async () => {
      const json = await (await fetch(fetchUrl)).json();
      setCharcter(json.data.results);
      setLoading(false);
    };
    getDetail();
  }, [fetchUrl]);

  return (
    <div className={styles.title}>
      {loading ? (
        <div className={styles.loading}>
          <h1>Loading...</h1>
        </div>
      ) : (
        charcter.map((char) => (
          <CharacterDetail
            key={char.id}
            id={char.id}
            name={char.name}
            thumbnail={char.thumbnail}
            comic={char.comic}
          />
          //   <h2>{char.name}</h2>
          //   <div>
          //     <img
          //       alt={char.name}
          //       src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
          //     />
          //   </div>
          //   <div>
          //     <h2>Comic</h2>
          //     <ul>
          //       <li>{char.series.items[0].name}</li>
          //     </ul>
          //   </div>
          // </div>
        ))
      )}
    </div>
  );
}
