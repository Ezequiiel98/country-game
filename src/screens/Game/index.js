import React from 'react';
import CardGame from 'components/CardGame';
import CardFinishGame from 'components/CardFinishGame';

import styles from './index.module.scss';

export default function Game() {
  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.containerCard}>
        </div>
      </div>
      <p className={styles.nameCopyRight}>Ezequiel Aragón @ DevChallenges.io</p>
    </div>
  );
}
