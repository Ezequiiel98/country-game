import React from 'react';
import Button from 'components/Button';

import imageWorld from '../../assets/undraw_adventure_4hum 1.svg';

import styles from './index.module.scss';

export default function Game() {
  return (
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.containerCard}>
          <img className={styles.imgWorld} src={imageWorld} />
          <div className={styles.card}>
            <img className={styles.flagCountry} src="https://restcountries.eu/data/ala.svg" alt="" />
            <h2 className={styles.titleQuiz}>Which country does this flag belong to?</h2>
            <div className={styles.containerOptions}>
              <Button primary>
                A <span className={styles.optionText}> Vietam </span>
              </Button>
              <Button primary>
                B <span className={styles.optionText}> vietam</span>
              </Button>
              <Button fail>
                C <span className={styles.optionText}>vietam</span>
              </Button>
              <Button success>
                D <span className={styles.optionText}>vietam</span>
              </Button>
              <Button secondary>Next</Button>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.nameCopyRight}>Ezequiel Aragón @ DevChallenges.io</p>
    </div>
  );
}
