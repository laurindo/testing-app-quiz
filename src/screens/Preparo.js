import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card/Card';
import { PREPARO_CARDS } from '../data/menu-data';

const Preparo = () => (
  <div>
    <Header />
    <Card items={PREPARO_CARDS} />
  </div>
);

export default Preparo;
