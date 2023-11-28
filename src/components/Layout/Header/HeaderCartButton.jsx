import { FaShoppingCart } from 'react-icons/fa';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span>
        <FaShoppingCart className={styles.icon} />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
