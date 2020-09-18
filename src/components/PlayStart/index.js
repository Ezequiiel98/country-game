import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import styles from './index.module.scss';

export default function PlayStart({ onClick }) {
  return (
    <div className={styles.playStart}>
      <Button onClick={onClick} secondary>Start Game</Button>
    </div>
  );
}

PlayStart.propTypes = {
  onClick: PropTypes.func.isRequired
};
