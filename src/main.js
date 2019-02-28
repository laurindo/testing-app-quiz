import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import QuizPage from './components/QuizPage';
import App from './components/App';
import './style.css';

render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/quiz" exact={true} component={QuizPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);
