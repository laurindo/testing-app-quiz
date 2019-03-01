import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card/Card';

const App = () => (
    <div>
        <Card items={[1,2,3,4,5]} />
        <Link to="/quiz">Ir para a página sobre \o/</Link>
    </div>
);

export default App;