import React from 'react';
import styles from './button.module.css';

const Button = ({onClick}) => {
  return (
    <div className='LoadMoreButton'>
      <button
        type='button'
        className={styles.button}
        onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
