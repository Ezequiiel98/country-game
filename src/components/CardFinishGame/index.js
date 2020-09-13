import React from 'react';
import imgAward from 'assets/undraw_winners_ao2o 2.svg';

import Button from '../Button';

import styles from './index.module.scss';

export default function CardFinishGame() {
  return (
    <div className={styles.card}>
      <img src={imgAward} />
      <h2 className={styles.title}>Results</h2>
      <p className={styles.message}>
        You got <span className={styles.points}>4</span> correct answers.
      </p>
      <Button>Try again</Button>
    </div>
  );
}
