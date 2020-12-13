import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BenefitsPage from '../views/BenefitsPage';
import RequestPage from '../views/RequestPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BenefitsPage} />
      <Route exact path="/requestForm" component={RequestPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
