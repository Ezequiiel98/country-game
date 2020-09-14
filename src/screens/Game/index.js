import React, { useState, useEffect, useCallback } from 'react';
import CardGame from 'components/CardGame';
import CardFinishGame from 'components/CardFinishGame';
import fetchCountries from 'services/fetchCountries.js';

import styles from './index.module.scss';

const shuffleArray = (array = [], shuffleTimes = 1) => {
  const list = [...array];

  for (let i = 0; i < shuffleTimes; i++) {
    for (let j = 0; j < list.length; j++) {
      const indexRandom = Math.floor(Math.random() * (list.length - 1)) + 1;
      const itemTemp = list[j];

      list[j] = list[indexRandom];
      list[indexRandom] = itemTemp;
    }
  }

  return list;
};

const QUESTIONS = ['capital', 'country', 'flag'];

export default function Game() {
  const [countries, setCountries] = useState([]);
  const [countryRandom, setcountryRandom] = useState(null);
  const [options, setOptions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(true);

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetchCountries();
      setCountries(res.data);
      setLoaded(true);
    };

    getCountries();
  }, []);

  const getcountryRandom = useCallback(() => {
    if (nextQuestion) {
      const indexRandom = Math.floor(Math.random() * (countries.length - 1)) + 1;
      const country = countries[indexRandom];
      setcountryRandom(country);
      setNextQuestion(false);
    }
  }, [countries, setcountryRandom, nextQuestion]);

  const getOptions = useCallback(() => {
    const NUM_OPTIONS = 3;
    const indexUsed = [];
    const optionsAnswers = [countryRandom.name];
    let optionsShuffled = [];

    for (let i = 0; i < NUM_OPTIONS; i++) {
      const indexRandom = Math.floor(Math.random() * (countries.length - 1)) + 1;

      if (countries[indexRandom] === countryRandom || indexUsed.includes(indexRandom)) {
        const index =
          indexRandom >= 1 && indexRandom <= countries.length - 1 ? indexRandom + 1 : indexRandom - 1;

        indexUsed.push(index);
        optionsAnswers.push(countries[index].name);
      } else {
        optionsAnswers.push(countries[indexRandom].name);
        indexUsed.push(indexRandom);
      }
    }

    optionsShuffled = shuffleArray(optionsAnswers, Math.floor(Math.random() * 5) + 1);
    setOptions(optionsShuffled);
  }, [countryRandom, setOptions, countries]);

  useEffect(() => {
    if (loaded) {
      getcountryRandom();
    }
  }, [loaded, getcountryRandom]);

  useEffect(() => {
    if (loaded && countryRandom) {
      getOptions();
    }
  }, [loaded, countryRandom, getOptions]);

  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.containerCard}>
          {loaded ? (
            <CardGame options={options} country={countryRandom} setNextQuestion={setNextQuestion} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <p className={styles.nameCopyRight}>Ezequiel Aragón @ DevChallenges.io</p>
    </div>
  );
}
