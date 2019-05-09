import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card/Card';
import { PINOS_CARDS } from '../data/menu-data';

const Pinos = () => (
  <div>
    <Header />
    <Card items={PINOS_CARDS} />
  </div>
);

export default Pinos;
