import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Movie from '../components/Movie';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setMovies(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <div className={styles.title}>
        <span>MARVEL</span>
        <span>Character List</span>
      </div>
      {loading ? (
        <div className={styles.loading}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <ul className={styles.list}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              name={movie.name}
              thumbnail={movie.thumbnail}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
