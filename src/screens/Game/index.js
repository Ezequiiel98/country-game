import React from 'react';
import imageWorld from '../../assets/undraw_adventure_4hum 1.svg';
import styles from './index.module.scss';

export default function Game(){
  return(
    <div className={styles.container}>
      <div className={styles.containerCard}>
        <h1 className={styles.title}>Country Quiz</h1>
        <div className={styles.card}>
          <img className={styles.imgWorld} src={imageWorld} />
          <h2 className={styles.titleQuiz}>Kuala Lumpur is the capital of</h2>
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
      </div>
    </div>
  )
}

