import React, { useState, useContext } from 'react';
import imageWorld from 'assets/undraw_adventure_4hum 1.svg';
import { PointsContext } from 'context/points-context';

import Button from '../Button';

import styles from './index.module.scss';

const LETTERS_OPTIONS = ['A', 'B', 'C', 'D'];
const QUESTIONS = {
  flag: {
    getQuestion: () => 'Which country does this flag belong to?'
  },

  name: {
    getQuestion: ({ capital }) => `${capital} is the capital of`
  },

  capital: {
    getQuestion: ({ name }) => `The capital of ${name}`
  }
};

export default function CardGame({ options, country, setNextQuestion, question }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [optionChoose, setOptionChoose] = useState(null);
  const [points, setPoints] = useContext(PointsContext);

  const handleAnswer = (e) => {
    e.preventDefault();
    const { option } = e.target.dataset;
    const answer = options[LETTERS_OPTIONS.indexOf(option)];
    const isCorrect = answer === country[question === 'flag' ? 'name' : question];

    if (showAnswers) {
      return null;
    }

    if (isCorrect) {
      setPoints(points + 1);
    }

    setOptionChoose(option);
    setShowAnswers(true);
  };

  const handleNext = e => {
    e.preventDefault();

    if (showAnswers) {
      setShowAnswers(false);
      setOptionChoose(null);
      setNextQuestion(true);
    }
  };

  return (
    <>
      <img className={styles.imgWorld} src={imageWorld} alt="picture man with the world" />
      <div className={styles.card}>

        {question === 'flag' && <img className={styles.flagCountry} src={country?.flag} alt="Country Flag" />}

        <h2 className={styles.titleQuiz}>
          {QUESTIONS[question].getQuestion(country)}
        </h2>

        <div className={styles.containerOptions}>
          {options.map((option, i) => {
            if (option.trim() !== '') {
              return (
                <Button
                  key={LETTERS_OPTIONS[i]}
                  data-option={LETTERS_OPTIONS[i]}
                  onClick={handleAnswer}
                  fail={
                    showAnswers &&
                    option !== country[question === 'flag' ? 'name' : question] &&
                    optionChoose === LETTERS_OPTIONS[i]
                  }
                  success={showAnswers && option === country[question === 'flag' ? 'name' : question]}
                  disabled={showAnswers}
                >
                  {LETTERS_OPTIONS[i]} <span className={styles.optionText}>{option}</span>
                </Button>
              );
            }
          })}
          <Button secondary onClick={handleNext} disabled={!showAnswers}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
