import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles.cart__items}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={styles.cart__total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.cart__actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Cart;
