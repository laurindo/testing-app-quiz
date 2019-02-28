import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const App = () => (
    <div>
        <Card />
        <Link to="/quiz">Ir para a página sobre \o/</Link>
    </div>
);

export default App;