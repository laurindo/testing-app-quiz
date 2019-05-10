import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import QuizPage from './components/QuizPage';
//import SlidePage from './components/SlidePage';
import Preparo from './screens/Preparo';
import PreparoAnterior from './screens/PreparoAnterior';
import PreparoPosterior from './screens/PreparoPosterior';

import Provisorio from './screens/Provisorio';
import ProvisorioFacetas from './screens/ProvisorioFacetas';
import ProvisorioFuncional from './screens/ProvisorioFuncional';
import ProvisorioMockups from './screens/ProvisorioMockups';

import Moldagem from './screens/Moldagem';
import MoldagemCooping from './screens/MoldagemCooping';
import MoldagemTransferencia from './screens/MoldagemTransferencia';

import Cimentacao from './screens/Cimentacao';
import CimentacaoProvisoria from './screens/CimentacaoProvisoria';
import CimentacaoDefinitiva from './screens/CimentacaoDefinitiva';

import Pinos from './screens/Pinos';
import PinosFundido from './screens/PinosFundido';
import PinosFibraVidro from './screens/PinosFibraVidro';

import App from './components/App';
import SplashScreen from './components/SplashScreen';
import Child from './components/Child';
import './style.css';
import './manifest.json';

render(
  <HashRouter>
    <Switch>
      <Route path="/" exact={true} component={SplashScreen} />
      <Route path="/home" exact={true} component={App} />
      <Route path="/quiz" exact={true} component={QuizPage} />

      <Route path="/preparo" exact={true} component={Preparo} />
      <Route path="/preparo/anterior" exact={true} component={PreparoAnterior} />
      <Route path="/preparo/posterior" exact={true} component={PreparoPosterior} />

      <Route path="/provisorio" exact={true} component={Provisorio} />
      <Route path="/provisorio/facetas" exact={true} component={ProvisorioFacetas} />
      <Route path="/provisorio/funcional" exact={true} component={ProvisorioFuncional} />
      <Route path="/provisorio/mockups" exact={true} component={ProvisorioMockups} />

      <Route path="/moldagem" exact={true} component={Moldagem} />
      <Route path="/moldagem/cooping" exact={true} component={MoldagemCooping} />
      <Route path="/moldagem/transferencia" exact={true} component={MoldagemTransferencia} />

      <Route path="/cimentacao" exact={true} component={Cimentacao} />
      <Route path="/cimentacao/provisoria" exact={true} component={CimentacaoProvisoria} />
      <Route path="/cimentacao/definitiva" exact={true} component={CimentacaoDefinitiva} />

      <Route path="/pinos" exact={true} component={Pinos} />
      <Route path="/pinos/fundido" exact={true} component={PinosFundido} />
      <Route path="/pinos/fibra-de-vidro" exact={true} component={PinosFibraVidro} />

      <Route path="/submenu/:id" component={Child} />
      <Route path="/slide/:id" component={Child} />
      <Route path="/quiz/:quizId" component={Child} />
    </Switch>
  </HashRouter>,
  document.getElementById('app')
);
