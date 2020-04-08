import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shopPage/ShopPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
