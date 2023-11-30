import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  return (
    <li>
      <div className={styles.meal__content}>
        <h3 className={styles.meal__title}>{props.name}</h3>
        <div className={styles.meal__desc}>{props.description}</div>
        <div className={styles.meal__price}> ${props.price}</div>
      </div>

      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
