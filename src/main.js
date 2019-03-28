import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import QuizPage from './components/QuizPage';
//import SlidePage from './components/SlidePage';
import App from './components/App';
import SplashScreen from './components/SplashScreen';
import Child from './components/Child';
import './style.css';

render(
  <HashRouter>
    <Switch>
      <Route path="/" exact={true} component={SplashScreen} />
      <Route path="/home" exact={true} component={App} />
      <Route path="/quiz" exact={true} component={QuizPage} />
      <Route path="/submenu/:id" component={Child} />
      <Route path="/slide/:id" component={Child} />
      <Route path="/quiz/:quizId" component={Child} />
    </Switch>
  </HashRouter>,
  document.getElementById('app')
);
