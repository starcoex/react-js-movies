import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.module.css';
import Movie from '../components/Movie';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.results);
        setLoading(false);
      });
  }, []);
  // console.log(movies);
  return (
    <div className={styles.home}>
      {/* <header>
        <Link to={'/'}>MARVEL CHARCTER SHEET</Link>
      </header> */}

      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie key={movie.id} id={movie.id} name={movie.name} />
        ))
      )}
    </div>
  );
}
