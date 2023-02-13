import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Movie({ id, name, thumbnail }) {
  return (
    <div>
      <Link to={`/character/${id}`}>
        {' '}
        <h2>{name}</h2>
      </Link>
      {/* <p>{movie.thumbnail.path}</p> */}
      <img src={thumbnail} alt={name} />
    </div>
  );
}
Movie.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  thumbnail: propTypes.string,
};
