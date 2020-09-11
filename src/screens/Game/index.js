import React from 'react';
import imageWorld from '../../assets/undraw_adventure_4hum 1.svg';
import styles from './index.module.scss';

export default function Game(){
  return(
    <div className={styles.game}>
      <div className={styles.container}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.containerCard}>
          <img className={styles.imgWorld} src={imageWorld} />
          <div className={styles.card}>
            <img className={styles.flagCountry} src="https://restcountries.eu/data/ala.svg" alt="" />
            <h2 className={styles.titleQuiz}>Which country does this flag belong to?</h2>
            <div className={styles.containerOptions}>
               <button className={styles.button} type="button"> 
                A  <span className={styles.optionText}> Vietam </span>
              </button>
               <button className={styles.button} type="button">
                 B  <span  className={styles.optionText} > vietam</span> 
              </button>
              <button className={styles.buttonSuccess} type="button"> 
                C <span className={styles.optionText}>vietam</span>
              </button>
              <button className={styles.buttonFail} type="button"> 
                D <span className={styles.optionText}>vietam</span>
              </button>
            </div>
          </div>
          <button className={styles.buttonNext}>Next</button>
        </div>
      </div>
      <p className={styles.nameCopyRight}>Ezequiel Aragón @ DevChallenges.io</p>
    </div>
  )
}

