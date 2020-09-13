import React from 'react';
import imageWorld from 'assets/undraw_adventure_4hum 1.svg';

import Button from '../Button';

import styles from './index.module.scss';

const LETTERS_OPTIONS = ['A', 'B', 'C', 'D'];

export default function CardGame({ options }) {
  return (
    <>
      <img className={styles.imgWorld} src={imageWorld} alt="picture man with the world" />
      <div className={styles.card}>
        <img className={styles.flagCountry} src="https://restcountries.eu/data/ala.svg" alt="" />
        <h2 className={styles.titleQuiz}>Which country does this flag belong to?</h2>
        <div className={styles.containerOptions}>
          {options.map((option, i) => (
            <Button>
              {LETTERS_OPTIONS[i]} <span className={styles.optionText}>{option}</span>
            </Button>
          ))}
          <Button secondary>Next</Button>
        </div>
      </div>
    </>
  );
}
