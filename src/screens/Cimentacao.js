import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card/Card';
import { CIMENTACAO_CARDS } from '../data/menu-data';

const Cimentacao = () => (
  <div>
    <Header />
    <Card items={CIMENTACAO_CARDS} />
  </div>
);

export default Cimentacao;
