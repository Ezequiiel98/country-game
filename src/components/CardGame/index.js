import React, { useState } from 'react';
import imageWorld from 'assets/undraw_adventure_4hum 1.svg';

import Button from '../Button';

import styles from './index.module.scss';

const LETTERS_OPTIONS = ['A', 'B', 'C', 'D'];
const QUESTIONS = {};

export default function CardGame({ options, country, setNextQuestion }) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [optionChoose, setOptionChoose] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const { option } = e.target.dataset;
    if (showAnswers) {
      return null;
    }

    setOptionChoose(option);
    setShowAnswers(true);
  };

  const handleNext = () => {
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
        {/* <img className={styles.flagCountry} src="https://restcountries.eu/data/ala.svg" alt="" />*/}
        <h2 className={styles.titleQuiz}>{country?.capital} is the capital of</h2>
        <div className={styles.containerOptions}>
          {options.map((option, i) => (
            <Button
              key={LETTERS_OPTIONS[i]}
              data-option={LETTERS_OPTIONS[i]}
              onClick={handleClick}
              fail={showAnswers && option !== country.name && optionChoose === LETTERS_OPTIONS[i]}
              success={showAnswers && option === country.name}
            >
              {LETTERS_OPTIONS[i]} <span className={styles.optionText}>{option}</span>
            </Button>
          ))}
          <Button secondary onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
