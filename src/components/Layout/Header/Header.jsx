import styles from './Header.module.css';
import React from 'react';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className={styles.header__wrap}>
          <div className={styles.header__logo}>Простая Кухня</div>
          <div className={styles.header__wrap_cart}>
            <HeaderCartButton onClick={props.onShowCart} />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
