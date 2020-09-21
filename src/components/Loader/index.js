import React from 'react';

import styles from './index.module.scss';

export default function Loader() {
  return (
    <div className={styles.containerLoader}>
      <div className={styles.loader} />
    </div>
  );
}

