import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card/Card';
import { MOLDAGEM_CARDS } from '../data/menu-data';

const Moldagem = () => (
  <div>
    <Header />
    <Card items={MOLDAGEM_CARDS} />
  </div>
);

export default Moldagem;
