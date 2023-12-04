import Card from '../../UI/Card';
import MealItem from '../MealItem/MealItem';
import styles from './MealList.module.css';

const DUMMY_MEALS = [
  {
    id: 'a1',
    name: 'БУРГЕР #3 МЕНЮ',
    description:
      'Бургер, картопля фрі, напій (кока-кола , фанта,спрайт) 0.33 СОУС НЕ ВХОДИТЬ В ВАРТІСТЬ!',
    price: 11.99,
  },
  {
    id: 'a2',
    name: 'Стріпси 6 шт (6 шт)',
    description: 'Смачна курка в паніровці',
    price: 3.99,
  },
  {
    id: 'a3',
    name: 'Картопля з беконом та сирним соусом (175 г)',
    description:
      'Класична картопля фрі з беконом та сирним соусом , або українським соусом',
    price: 4.99,
  },
  {
    id: 'a4',
    name: 'Цезар (200 г)',
    description:
      'Айсберг, помідор, куряче філе, яйце перепілки, сухарики, сир пармезан, заправка.',
    price: 7.99,
  },
];

const MealList = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul className={styles.meals__wrap}>{mealList}</ul>
      </Card>
    </section>
  );
};

export default MealList;
