import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';


export default function Timer({ percentage }) {
  return (
    <div className={styles.containerTimer}>
      <div className={percentage > 20 ? styles.barGreen : styles.barRed} style={{ width: `${percentage}%` }} />
    </div>
  );
}

Timer.propTypes = {
  percentage: PropTypes.number.isRequired
};
