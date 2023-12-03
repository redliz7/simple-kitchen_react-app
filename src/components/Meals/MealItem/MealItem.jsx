import { useContext } from 'react';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      title: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li>
      <div className={styles.meal__content}>
        <h3 className={styles.meal__title}>{props.name}</h3>
        <div className={styles.meal__desc}>{props.description}</div>
        <div className={styles.meal__price}> ${props.price}</div>
      </div>

      <MealItemForm onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealItem;
