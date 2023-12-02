import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={styles.cart__items}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      <div className={styles.cart__items}>{cartItems}</div>
      <div className={styles.cart__total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.cart__actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Cart;
