import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import imageWorld from 'assets/undraw_adventure_4hum 1.svg';
import { PointsContext } from 'context/points-context';

import Button from '../Button';

import { LETTERS_OPTIONS, QUESTIONS } from './contants';
import styles from './index.module.scss';

export default function CardGame({ options, country, setNextQuestion, question, setStopTimer }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [optionChoose, setOptionChoose] = useState(null);
  const [points, setPoints] = useContext(PointsContext);

  const handleAnswer = optionAnswer => {
    const answer = options[LETTERS_OPTIONS.indexOf(optionAnswer)];
    const isCorrect = answer === country[question === 'flag' ? 'name' : question];

    if (showAnswers) {
      return null;
    }

    if (isCorrect) {
      setPoints(points + 1);
    }

    setOptionChoose(optionAnswer);
    setStopTimer(true);
    setShowAnswers(true);
  };

  const handleNext = e => {
    e.preventDefault();

    if (showAnswers) {
      setShowAnswers(false);
      setOptionChoose(null);
      setStopTimer(false);
      setNextQuestion(true);
    }
  };

  return (
    <>
      <img className={styles.imgWorld} src={imageWorld} alt="Man with the world" />
      <div className={styles.card}>
        {question === 'flag' && <img className={styles.flagCountry} src={country?.flag} alt="Country Flag" />}

        <h2 className={styles.titleQuiz}>
          {QUESTIONS[question].getQuestion(country)}
        </h2>

        <div className={styles.containerOptions}>
          {options
            .filter(option => option.trim() !== '')
            .map((option, i) => (
              <Button
                  key={LETTERS_OPTIONS[i]}
                  onClick={() => handleAnswer(LETTERS_OPTIONS[i])}
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
            ))
          }
          <Button onClick={handleNext} disabled={!showAnswers} secondary>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

CardGame.propTypes = {
  country: PropTypes.instanceOf(Object).isRequired,
  question: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(Array).isRequired,
  setNextQuestion: PropTypes.func.isRequired,
  setStopTimer: PropTypes.func.isRequired
};

