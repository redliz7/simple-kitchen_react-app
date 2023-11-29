import styles from './MealList.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Ролл "Наоми"',
    description:
      'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: 11.99,
  },
  {
    id: 'm2',
    name: 'Спайс в лососе',
    description: 'Рис, лосось, соус спайс',
    price: 3.99,
  },
  {
    id: 'm3',
    name: 'Суши с угрем',
    description: 'Угорь копченый, соус унаги, кунжут',
    price: 4.99,
  },
  {
    id: 'm4',
    name: 'Салат "Поке с лососем"',
    description:
      'Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый',
    price: 7.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>
      <div className={styles.meals__desc}>
        <div>{meal.name}</div>
        <div>{meal.description}</div>
        <div> {meal.price}</div>
      </div>

      <div className={styles.meals__control}>
        <div className={styles.meals__amount}>
          <span>Количетсво</span>
          <input></input>
        </div>
        <button>Добавить</button>
      </div>
    </li>
  ));

  return (
    <section className={styles.meals}>
      <ul>{mealList}</ul>
    </section>
  );
};

export default MealList;
