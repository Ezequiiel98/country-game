import React, { useState, useEffect, useCallback } from 'react';
import CardGame from 'components/CardGame';
import CardFinishGame from 'components/CardFinishGame';
import fetchCountries from 'services/fetchCountries.js';

import styles from './index.module.scss';

const shuffleArray = (list = []) => {
  console.log('entra', list);
  for (let i = 0; i < list.length; i++) {
    const indexRandom = Math.floor(Math.random() * (list.length - 1)) + 1;
    const itemTemp = list[i];

    list[i] = list[indexRandom];
    list[indexRandom] = itemTemp;
  }

  return list;
};

export default function Game() {
  const [countries, setCountries] = useState([]);
  const [randomCountry, setRandomCountry] = useState(null);
  const [options, setOptions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetchCountries();
      setCountries(res.data);
      setLoaded(true);
    };

    getCountries();
  }, []);

  const getRandomCountry = useCallback(() => {
    const indexRandom = Math.floor(Math.random() * (countries.length - 1)) + 1;
    const country = countries[indexRandom];
    setRandomCountry(country);
  }, [countries, setRandomCountry]);

  const getOptions = useCallback(() => {
    const NUM_OPTIONS = 3;
    const indexUsed = [];
    const optionsAnswers = [randomCountry.name];
    
    for (let i = 0; i < NUM_OPTIONS; i++) {
      const indexRandom = Math.floor(Math.random() * (countries.length - 1)) + 1;

      if (countries[indexRandom] === randomCountry || indexUsed.includes(indexRandom)) {
        const index =
          indexRandom >= 1 && indexRandom <= countries.length - 1 ? indexRandom + 1 : indexRandom - 1;

        indexUsed.push(index);
        optionsAnswers.push(countries[index].name);
      } else {
        optionsAnswers.push(countries[indexRandom].name);
        indexUsed.push(indexRandom);
      }
    }
    console.log(optionsAnswers);
    console.log('sale', shuffleArray(optionsAnswers));
    setOptions(optionsAnswers);
  }, [randomCountry, setOptions, countries]);

  useEffect(() => {
    if (loaded) {
      getRandomCountry();
    }
  }, [loaded, countries, getRandomCountry]);

  useEffect(() => {
    if (loaded && randomCountry) {
      getOptions();
    }
  }, [loaded, randomCountry, countries, getOptions]);

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
