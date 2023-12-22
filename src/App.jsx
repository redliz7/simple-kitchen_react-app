import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Description from './components/Layout/Description/Description';
import MealList from './components/Meals/MealList/MealList';
import Cart from './components/Cart/Cart';
import CartContextProvider from './store/CartContextProvider';

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Description />
      <main>
        <MealList />
      </main>
    </CartContextProvider>
  );
}

export default App;
