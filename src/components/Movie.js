import React from 'react';
import styles from '../styles/List.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Movie({ id, name, thumbnail }) {
  return (
    <li key={id} className={styles.item}>
      <Link to={`/character/${id}`}>
        <div className={styles.imgBox}>
          <img alr={name} src={`${thumbnail.path}.${thumbnail.extension}`} />
        </div>
        <div className={styles.name}>{name}</div>
      </Link>
    </li>
  );
}
Movie.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.object.isRequired,
  thumbnail: PropTypes.object.isRequired,
};
