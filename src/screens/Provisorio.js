import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card/Card';
import { PROVISORIO_CARDS } from '../data/menu-data';

const Provisorio = () => (
  <div>
    <Header />
    <Card items={PROVISORIO_CARDS} />
  </div>
);

export default Provisorio;
