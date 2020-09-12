import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ children, primary, secondary, fail, success }) {
  let stylesButton = 'btn';

  stylesButton = primary ? 'btnPrimary' : stylesButton;
  stylesButton = secondary ? 'btnSecondary' : stylesButton;
  stylesButton = fail ? 'btnFail' : stylesButton;
  stylesButton = success ? 'btnSuccess' : stylesButton;

  return (
    <button className={styles[stylesButton]} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fail: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool
};
