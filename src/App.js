import React from 'react';
import Header from './components/Layout/Header/Header';
import Description from './components/Layout/Description/Description';
import MealList from './components/MealList/MealList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Description />
      <MealList />
    </React.Fragment>
  );
}

export default App;
