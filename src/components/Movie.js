import React from 'react';
import styles from '../App.module.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Movie({ id, name }) {
  return (
    <div className={styles.movies}>
      <Link to={`/character/${id}`}>
        {' '}
        <h2>{name}</h2>
      </Link>
      {/* <p>{movie.thumbnail.path}</p> */}
    </div>
  );
}
Movie.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
};
