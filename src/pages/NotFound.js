import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

const NotFound = () => {
    return (
        <div>
            <Navigation />
            <h1>Oops, on dirait que vous cherchiez une page qui n'existe pas o_O</h1>
            <h4>Erreur 404 - Non trouvé</h4>
            <a href="/">Retour à la page d'accueil</a>
        </div>
    );
};

export default NotFound;