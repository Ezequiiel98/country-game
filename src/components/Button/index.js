import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ children, primary, secondary, fail, success, onClick }) {
  let stylesButton = 'btn';

  stylesButton = primary ? 'btnPrimary' : stylesButton;
  stylesButton = secondary ? 'btnSecondary' : stylesButton;
  stylesButton = fail ? 'btnFail' : stylesButton;
  stylesButton = success ? 'btnSuccess' : stylesButton;

  return (
    <button className={styles[stylesButton]} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  fail: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool
};
