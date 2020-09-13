import React, { useState, useEffect } from 'react';
import CardGame from 'components/CardGame';
import CardFinishGame from 'components/CardFinishGame';
import fetchCountries from 'services/fetchCountries.js';

import styles from './index.module.scss';

export default function Game() {
  const [contries, setCountries] = useState([]);


  useEffect(() => {
    const getCountries = async () => {
      const res = await fetchCountries();
      setCountries(res.data);
    };

    getCountries();
  }, []);

  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.containerCard}>
          <CardFinishGame />
        </div>
      </div>
      <p className={styles.nameCopyRight}>Ezequiel Aragón @ DevChallenges.io</p>
    </div>
  );
}
