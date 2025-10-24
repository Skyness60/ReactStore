import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Bienvenue sur la page d'accueil</h1>
            <p>Ceci est la page d'accueil de notre boutique en ligne.</p>
            <Link to="/produit">Voir les produits</Link>
        </div>
    );
};

export default HomePage;