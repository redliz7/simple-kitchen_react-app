import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import React, { createContext, useContext, useState } from 'react';
import CartItem from './CartItem';
import SubmitOreder from './SubmitOrder';

const Cart = (props) => {
  const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
  const [isDataSubmiting, setIsDataSubmiting] = useState(false);
  const [wasDataSendingSuccessful, setWasDataSendingSuccessful] =
    useState(false);
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = (action) => {
    setIsSubmitOrderAvailable(true);
  };

  const dataMeals = {
    title: cartContext.items.map((item) => item.title),
    amount: cartContext.items.map((item) => item.amount),
    price: cartContext.items.map((item) => item.price),
  };

  const submitOrderHandler = async (userData) => {
    setIsDataSubmiting(true);

    try {
      fetch(
        'https://custom-hooks-react-example-default-rtdb.firebaseio.com/simple-kitchen/orders.json',
        {
          method: 'POST',
          body: JSON.stringify({
            user: userData,
            orderedMeals: cartContext.items[0],
          }),
        }
      );
    } catch (error) {
      setIsDataSubmiting(false);
      setWasDataSendingSuccessful(false);
    }
    setIsDataSubmiting(false);
    setWasDataSendingSuccessful(true);
    cartContext.clearCart();
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

  const modalButtons = (
    <div className={styles.cart__actions}>
      <button className={styles['button--alt']} onClick={props.onHideCart}>
        Закрыть
      </button>
      {hasItems && (
        <button onClick={orderHandler} className={styles.button}>
          Заказать
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={styles.cart__total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      {isSubmitOrderAvailable && (
        <SubmitOreder
          onSubmit={submitOrderHandler}
          onCancel={props.onHideCart}
        />
      )}
      {!isSubmitOrderAvailable && modalButtons}
    </React.Fragment>
  );

  const dataSubmitingCartModalContent = <p>Отправка данных заказа...</p>;

  const dataWasSabmittedCartModalContent = (
    <React.Fragment>
      <p>Ваш заказ успешно отправлен!</p>
      <div className={styles.cart__actions}>
        <button className={styles['button--alt']} onClick={props.onHideCart}>
          Закрыть
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!isDataSubmiting && !wasDataSendingSuccessful && cartModalContent}
      {isDataSubmiting && dataSubmitingCartModalContent}
      {wasDataSendingSuccessful && dataWasSabmittedCartModalContent}
    </Modal>
  );
};

export default Cart;
