import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BenefitsPage from '../views/BenefitsPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BenefitsPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
