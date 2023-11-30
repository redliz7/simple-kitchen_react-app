import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
  return (
    <form className={styles.meal__form}>
      <div className={styles.meal__amount}>
        <Input
          label="Количетсво"
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
    </form>
  );
};

export default MealItemForm;
