import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Description from './components/Layout/Description/Description';
import MealList from './components/Meals/MealList/MealList';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <React.Fragment>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Description />
      <main>
        <MealList />
      </main>
    </React.Fragment>
  );
}

export default App;
