import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BenefitsPage from '../views/BenefitsPage';
import RequestPage from '../views/RequestPage';
import InsurancePage from '../views/InsurancePage';
import ApprovalPage from '../views/ApprovalPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BenefitsPage} />
      <Route exact path="/requestForm" component={RequestPage} />
      <Route exact path="/insurance" component={InsurancePage} />
      <Route exact path="/approval" component={ApprovalPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
