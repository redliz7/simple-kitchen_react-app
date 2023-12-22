import React, { useContext, useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountImputRef = useRef();

  const cartContext = useContext(CartContext);

  const sumbitHandler = (e) => {
    e.preventDefault();

    const inputAmount = amountImputRef.current.value;
    if (
      inputAmount.trim().length === 0 ||
      +inputAmount < 1 ||
      +inputAmount > 10
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(+inputAmount);
  };

  return (
    <form className={styles.meal__form} onSubmit={sumbitHandler}>
      <div className={styles.meal__amount}>
        <Input
          ref={amountImputRef}
          label="Количество"
          input={{
            id: props.id,
            type: 'number',
            min: '1',
            stap: '1',
            defaultValue: '1',
          }}
        />
      </div>
      <button className={styles.button}>Добавить</button>
      {!isAmountValid && <p>Пожалуйста введите количество от 1 до 10.</p>}
    </form>
  );
};

export default MealItemForm;
