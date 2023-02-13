import React, { useEffect, useState } from 'react';
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
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            name={movie.name}
            thumbnail={movie.thumbnail.path}
          />
        ))
      )}
    </div>
  );
}
