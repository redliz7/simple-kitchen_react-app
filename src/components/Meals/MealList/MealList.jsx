import { useEffect, useReducer, useState } from 'react';
import Card from '../../UI/Card';
import MealItem from '../MealItem/MealItem';
import styles from './MealList.module.css';

//send to server// const DUMMY_MEALS = [
//   {
//     id: 'a1',
//     name: 'БУРГЕР #3 МЕНЮ',
//     description: 'Бургер, картопля фрі, напій (кока-кола , фанта,спрайт) 0.33 СОУС НЕ ВХОДИТЬ В ВАРТІСТЬ!',
//     price: 11.99,
//   },
//   {
//     id: 'a2',
//     name: 'Стріпси 6 шт (6 шт)',
//     description: 'Смачна курка в паніровці',
//     price: 3.99,
//   },
//   {
//     id: 'a3',
//     name: 'Картопля з беконом та сирним соусом (175 г)',
//     description: 'Класична картопля фрі з беконом та сирним соусом , або українським соусом',
//     price: 4.99,
//   },
//   {
//     id: 'a4',
//     name: 'Цезар (200 г)',
//     description: 'Айсберг, помідор, куряче філе, яйце перепілки, сухарики, сир пармезан, заправка.',
//     price: 7.99,
//   },
// ];
// const sendDataMeals = async (meal) => {
//   try {
//     const response = await fetch(
//       'https://custom-hooks-react-example-default-rtdb.firebaseio.com/simple-kitchen.json',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: meal.id,
//           name: meal.name,
//           description: meal.description,
//           price: meal.price,
//         }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error('Failed to send data to the server');
//     }

//     console.log('Data sent successfully:', meal);
//   } catch (error) {
//     console.error('Error sending data to the server:', error);
//   }
// };
// const sendAllData = async () => {
//   for (const meal of DUMMY_MEALS) {
//     await sendDataMeals(meal);
//   }
// };
// sendAllData();

const initialMealsState = {
  meals: [],
  isLoading: false,
  isEmpty: true,
};

const mealStateReducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { meals: state.meals, isLoading: true, isEmpty: false };
  }
  if (action.type === 'LOADED') {
    return { meals: action.value, isLoading: false, isEmpty: false };
  }
  if (action.type === 'EMPTY') {
    return { meals: [], isLoading: false, isEmpty: true };
  }
  return state;
};

const MealList = () => {
  const [mealsState, dispatchAction] = useReducer(
    mealStateReducer,
    initialMealsState
  );

  useEffect(() => {
    const getMealsFromServer = async () => {
      try {
        dispatchAction({ type: 'LOADING' });
        const response = await fetch(
          'https://custom-hooks-react-example-default-rtdb.firebaseio.com/simple-kitchen/meals.json'
        );
        if (!response.ok) {
          throw new Error('Не удалось получить блюда с сервера');
        }

        const data = await response.json();
        const mealsArray = [];
        for (const key in data) {
          mealsArray.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        if (mealsArray.length > 0) {
          dispatchAction({ type: 'LOADED', value: mealsArray });
        }
        setTimeout(() => {
          if (mealsArray.length === 0) {
            dispatchAction({ type: 'EMPTY', value: mealsArray });
          }
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };

    getMealsFromServer();
  }, []);

  const isLoading = mealsState.isLoading;
  const isEmpty = mealsState.isEmpty;
  const mealList = mealsState.meals.map((meal) => (
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
        {(isLoading && <h2 className={styles['load-empty']}>Загрузка...</h2>) ||
          (isEmpty && <h2 className={styles['load-empty']}>Список пуст</h2>)}
        {!isLoading && <ul className={styles.meals__wrap}>{mealList}</ul>}
      </Card>
    </section>
  );
};

export default MealList;
