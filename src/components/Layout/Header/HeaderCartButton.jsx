import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>
        <FaShoppingCart className={styles.icon} />
      </span>
      <span>Корзина</span>
      <span className={styles.badge}>{cartItemsNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
