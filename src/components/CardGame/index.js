import React from 'react';
import imageWorld from 'assets/undraw_adventure_4hum 1.svg';

import Button from '../Button';

import styles from './index.module.scss';

export default function CardGame() {
  return (
    <>
      <img className={styles.imgWorld} src={imageWorld} alt="picture man with the world" />
      <div className={styles.card}>
        <img className={styles.flagCountry} src="https://restcountries.eu/data/ala.svg" alt="" />
        <h2 className={styles.titleQuiz}>Which country does this flag belong to?</h2>
        <div className={styles.containerOptions}>
          <Button>
            A <span className={styles.optionText}> Vietam </span>
          </Button>
          <Button>
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
    </>
  );
}
