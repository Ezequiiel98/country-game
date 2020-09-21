import React, { useState, useEffect, useCallback } from 'react';
import CardGame from 'components/CardGame';
import CardFinishGame from 'components/CardFinishGame';
import PlayStart from 'components/PlayStart';
import Timer from 'components/Timer';
import Loader from 'components/Loader';
import fetchCountries from 'services/fetchCountries.js';
import PointsContextProvider from 'context/points-context';

import styles from './index.module.scss';

const shuffleArray = (array = [], shuffleTimes = 1) => {
  const list = [...array];

  if (Math.random() > 0.5) {
    list.sort();
  } else {
    list.reverse();
  }

  for (let i = 0; i < shuffleTimes; i++) {
    for (let j = 0; j < list.length; j++) {
      const indexRandom = Math.floor(Math.random() * list.length);
      const itemTemp = list[j];

      list[j] = list[indexRandom];
      list[indexRandom] = itemTemp;
    }
  }

  return list;
};

const QUESTIONS = ['capital', 'name', 'flag'];
const TIME_GAME = 20;

export default function Game() {
  const [countries, setCountries] = useState([]);
  const [countryRandom, setcountryRandom] = useState(null);
  const [options, setOptions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [question, setQuestion] = useState('capital');
  const [finishGame, setFinishGame] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [stopTimer, setStopTimer] = useState(true);
  const [timer, setTimer] = useState(TIME_GAME);
  const percentage = timer / TIME_GAME * 100;

  useEffect(() => {
    const getCountries = async () => {
      const res = await fetchCountries();
      setCountries(res.data);
      setLoaded(true);
    };

    getCountries();
  }, []);

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      if (!stopTimer && timer !== 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    if (timer === 0) {
      setFinishGame(true);
    }

    return () => clearInterval(intervalTimer);
  }, [setTimer, timer, stopTimer]);

  const getCountryRandom = useCallback(() => {
    if (nextQuestion || tryAgain) {
      const indexRandom = Math.floor(Math.random() * countries.length);
      const country = countries[indexRandom];
      const questionRandom = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];

      if (tryAgain) {
        setFinishGame(false);
        setTimer(TIME_GAME);
      }

      setcountryRandom(country);
      setNextQuestion(false);
      setQuestion(questionRandom);
      setTryAgain(false);
    }
  }, [countries, tryAgain, nextQuestion]);

  const getOptions = useCallback(() => {
    const NUM_OPTIONS = 3;
    const indexUsed = [];
    const questionOption = question === 'flag' ? 'name' : question;
    const optionsAnswers = [countryRandom[questionOption]];
    let optionsShuffled = [];

    for (let i = 0; i < NUM_OPTIONS; i++) {
      const indexRandom = Math.floor(Math.random() * countries.length);

      if (countries[indexRandom] === countryRandom || indexUsed.includes(indexRandom)) {
        const index =
          indexRandom >= 1 && indexRandom <= countries.length - 1 ? indexRandom + 1 : indexRandom - 1;

        indexUsed.push(index);
        optionsAnswers.push(countries[index][questionOption]);
      } else {
        optionsAnswers.push(countries[indexRandom][questionOption]);
        indexUsed.push(indexRandom);
      }
    }

    optionsShuffled = shuffleArray(optionsAnswers, Math.floor(Math.random() * 5) + 1);
    setOptions(optionsShuffled);
  }, [question, countryRandom, countries]);

  useEffect(() => {
    if (loaded) {
      getCountryRandom();
    }
  }, [loaded, getCountryRandom]);

  useEffect(() => {
    if (loaded && countryRandom) {
      getOptions();
    }
  }, [loaded, countryRandom, getOptions]);

  const handlePlayGame = () => {
    setStartGame(true);
    setNextQuestion(true);
    setStopTimer(false);
  };

  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.containerCard}>
          {!loaded && !finishGame && <Loader />}
          {!startGame && loaded && <PlayStart onClick={handlePlayGame} />}

          <PointsContextProvider>
            {startGame && loaded && !finishGame && (
              <>
                <Timer percentage={percentage} />
                <CardGame
                  options={options}
                  country={countryRandom || {}}
                  setNextQuestion={setNextQuestion}
                  question={question}
                  percentage={percentage}
                  setStopTimer={setStopTimer}
                />
              </>
            )}

            {finishGame && <CardFinishGame setTryAgain={setTryAgain} />}
          </PointsContextProvider>
        </div>
      </div>
      <footer className={styles.footer}>
        <p className={styles.nameCopyRight}>Ezequiel Aragón @ DevChallenges.io</p>
      </footer>
    </div>
  );
}

