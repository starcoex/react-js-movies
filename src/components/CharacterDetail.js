import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Detail.module.css';
import PropTypes from 'prop-types';
export default function CharacterDetail({
  id,
  name,
  thumbnail,
  comics,
  series,
  stories,
}) {
  return (
    <div key={id}>
      <section>
        <div className={styles.leftBox}>
          <h1>{name}</h1>
          <img alt={name} src={`${thumbnail.path}.${thumbnail.extension}`} />
          <div className={styles.backLink}>
            <Link to={'/'}>Back to List</Link>
          </div>
        </div>
        <div className={styles.rightBox}>
          <h1>
            <span>Comics</span>
          </h1>
          <ul>
            {comics.items.map((comic) => (
              <li key={comic.name}>{comic.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

CharacterDetail.prototype = {
  id: PropTypes.number.isRequired,
  thumbnail: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  comic: PropTypes.object.isRequired,
  series: PropTypes.object.isRequired,
  stories: PropTypes.object.isRequired,
};
