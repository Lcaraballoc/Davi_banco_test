import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import BenefitsPage from '../views/BenefitsPage';
import RequestPage from '../views/RequestPage';
import InsurancePage from '../views/InsurancePage';
import ApprovalPage from '../views/ApprovalPage';
import ModalContainer from '../components/ModalContainer';

const App = () => (
  <BrowserRouter className="app">
    <Layout>
      <Switch>
        <Route exact path="/" component={BenefitsPage} />
        <Route exact path="/requestForm" component={RequestPage} />
        <Route exact path="/insurance" component={InsurancePage} />
        <Route exact path="/approval" component={ApprovalPage} />
        <Route exact path="/modal" component={ModalContainer} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
