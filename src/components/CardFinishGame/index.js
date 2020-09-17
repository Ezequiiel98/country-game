import React, { useContext } from 'react';
import imgAward from 'assets/undraw_winners_ao2o 2.svg';
import { PointsContext } from 'context/points-context';

import Button from '../Button';

import styles from './index.module.scss';

export default function CardFinishGame({ setTryAgain }) {
  const [points, setPoints] = useContext(PointsContext);

  const handleClick = e => {
    setPoints(0);
    setTryAgain(true);
  };

  return (
    <div className={styles.card}>
      <img src={imgAward} />
      <h2 className={styles.title}>Results</h2>
      <p className={styles.message}>
        You got <span className={styles.points}>{points}</span> correct answers.
      </p>
      <Button onClick={handleClick}>Try again</Button>
    </div>
  );
}
