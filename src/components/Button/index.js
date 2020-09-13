import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';


export default function Button({ children, secondary, fail, success, onClick, ...props }) {
  let stylesButton = 'btnPrimary';

  stylesButton = secondary ? 'btnSecondary' : stylesButton;
  stylesButton = fail ? 'btnFail' : stylesButton;
  stylesButton = success ? 'btnSuccess' : stylesButton;

  return (
    <button className={styles[stylesButton]} type="button" onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  fail: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool
};

