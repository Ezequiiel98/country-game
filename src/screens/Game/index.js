import React, { useState, useEffect, useCallback } from 'react';
import CardGame from 'components/CardGame';
import CardFinishGame from 'components/CardFinishGame';
import fetchCountries from 'services/fetchCountries.js';

import styles from './index.module.scss';

export default function Game() {
  const [contries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetchCountries();
      setCountries(res.data);
    };

    getCountries();
  }, []);

  const getRandomCountry = useCallback(() => {
    const indexRandom = Math.floor(Math.random() * contries.length + 1);
    const country = contries[indexRandom];
    setRandomCountry(country);
  }, [contries, setRandomCountry]);

  const getOptions = useCallback(() => {
    const NUM_OPTIONS = 3;
    const optionsAnswers = [];

    for (let i = 0; i < NUM_OPTIONS; i++) {
      const indexRandom = Math.floor(Math.random() * contries.length + 1);

      if (i === 0) {
        optionsAnswers.push(randomCountry);
      }

      optionsAnswers.push(contries[indexRandom]);
    }

    setOptions(optionsAnswers);
  }, [randomCountry, setOptions, contries]);

  useEffect(() => getRandomCountry(), [contries, getRandomCountry]);
  useEffect(() => getOptions(), [contries, getOptions]);

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
